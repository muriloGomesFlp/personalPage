$(window).ready(function() { 
document.getElementById("btnEmail").addEventListener("click", validateForm);
      function validateForm() {
        //gets the name
        var name = document.getElementById("FormName").value;
        //gets the email
        var email = document.getElementById("FormEmail").value;
        //gets the message
        var message = document.getElementById("FormMessage").value;
        console.log(name, email, message);
        //checks if all fields have been filled before sending message.
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
          alert("Todos os campos devem ser preenchidos!");
        } else {
          $('#contact-form').trigger('reset');
          sendMessage(name, email, message);
        }
      }

      //sends information to firebase
      function sendMessage(name, email, message) {
        //sends the name, email and message by passing them as url parameters
        var urlSend = "https://us-central1-gcf-teste.cloudfunctions.net/sendMailPersonal?nome="+name +"&email="+email+"&msg="+message+"";
        window.open(urlSend,  "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=200");
      }

});