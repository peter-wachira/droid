    // Working Contact Form
    $('#contact-form').submit(function() {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#submit')
                .before('')
                .attr('disabled', 'disabled');

            

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    comments: $('#comments').val(),
                },
                function(data) {
                  var toaster=document.getElementById('message');
                    var success = document.createElement('div');
                    success.innerText="Thank you "+ $('#name').val() +", your message was well received. I will contact you soonest.";
                    success.id="ajaxsuccess";
                    toaster.appendChild(success);
                    console.log(data);
                    $('#message').slideDown('slow');
                    $('#contact-form img.contact-loader').fadeOut('slow', function() {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.result.match('success') != null)
                     $('#cform').slideUp('slow');
                    console.log(data)
                    console.log(data.result)
                }
            );

        });

        return false;

    });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())