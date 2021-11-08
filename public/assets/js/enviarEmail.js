$(function() {
  var msgEmail, alertSuccess, alertError, alertErrorTitle,btn_lang;

  $('#btnEmail').click(function (e) {
    e.preventDefault();
    var name = document.getElementById("FormName").value;
    var email = document.getElementById("FormEmail").value;
    var message = document.getElementById("FormMessage").value;

      if (navigator.language.includes('pt')){
        msgEmail = 'Aguarde enquanto estamos enviando seu Email...';
        alertSuccess= 'Email enviado com sucesso!';
        alertError= 'Serviço temporariamente indisponível';
        alertErrorTitle= 'Erro ao enviar o Email';
      }else {
        msgEmail = 'Wait while we send your Email...';
        alertSuccess= 'Email successfully sent';
        alertError= 'Service temporarily unavailable';
        alertErrorTitle= 'Erro sending the Email';
      }
    

    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      alert("Todos os campos devem ser preenchidos!");
    } else {
      var subject='Contato Personal Page';  
      var dialog = bootbox.dialog({ 
        css:{'backgroud':' #fdfdfd'},          
        message: '<p class="text-center mb-0"><img width="120px" src="images/sending.gif"><br>'+msgEmail+'</p>',
        closeButton: false
      });
      $.ajax({
        url : "https://us-central1-gcf-teste.cloudfunctions.net/sendMail",
        type : 'POST',      
        data: {'subject': subject,'name':name,'email':email,'message':message},
        dataType: 'json',
        beforeSend: function(){             
          dialog.modal('show');
        },
        success: function(resp){    
          if(resp.send == true){
            console.log(resp);
            dialog.modal('hide')          
            toastr["success"]("", alertSuccess);
            $('#contact-form').trigger('reset');
          }else if(resp.send == false){
            dialog.modal('hide')        
            toastr["error"](alertError, alertErrorTitle);      
          }           
        },error: function(jqXHR, exception){
            dialog.modal('hide')    
            console.log(jqXHR);    
            console.log(exception);
            toastr["error"](alertError, alertErrorTitle);          
        }
      })
    }
    
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  });
});