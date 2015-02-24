  (function() {
  var app = angular.module('forms', ['forms-directives']);


  app.controller("FeedbackController", function(){

    this.feedback = {};

    this.addReview = function(product){
      this.feedback.createdOn = Date.now();
      product.feedbacks.push(this.feedback);
      this.feedback = {};  // clears out the form on submission, hides live preview
    };

  });

  })();

  $('form').on('submit', function(event){
      event.preventDefault();
      var form= $(this);
      $.ajax($('form').attr('action'),{
      type: 'POST',
      data: $('form')form.serialize(),
      dataType:'json',
      success: function(result){
        form.remove();
        var msg = $("<form></form>");
        msg.append("Congratulations! We will send you your first activity to share with " + result.childName + " soon!");
        $('#reader').hide().html(result).fadeIn();
      },
      contentType:'application/json'
    });
  });