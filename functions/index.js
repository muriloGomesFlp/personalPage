'use strict'
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();
const successPageMailSend = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title id="title"></title>
    <script src="https://msgomes.web.app/assets/js/jquery.min.js"></script> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style media="screen">
      body { background-color: rgb(211, 211, 211);; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
      color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
      #message button {margin: auto; width:100%; font-weight: bold;}
      #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px 16px; border-radius: 3px; }
      #message h4 { color: rgb(0, 137, 216); font-weight: bold; font-size: 20px; text-align: center; }
      #message h3 { color: #888; font-weight: normal; font-size: 16px; margin: 16px 0 12px; }
      #message h2 {text-align: center; color: #000000; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
      #message h1 {text-align: center; font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
      #message p {text-align:center; line-height: 140%; margin: 16px 0 24px; font-size: 14px; }
      #message a { display: block; text-align: center; background: #039be5; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; }
      #message, #message a { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
      #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
      @media (max-width: 600px) {
        body, #message { margin-top: 0; background: white; box-shadow: none; }
        body { border-top: 16px solid #004e97; }
      }

    </style>
  </head>
  <body>
    <div id="message">
      <div>        
        <h4 id="titleText"></h4>
      </div>
      <h2 id="title2"></h2>     
      <br>
    <button id="btnExit" class="btn btn-primary"></button>
    </div>
    <script>
    $(window).ready(function() { 
        var userLang = navigator.language || navigator.userLanguage    
        if (userLang.includes('pt')){
            language('pt-br');
        }else {
            language('en')
        }
        function language(lang){            
            if(lang == 'pt-br'){     
            $('#title').text('MSGomes - Email Enviado');
            $('#titleText').text('Agradeço o interesse em trabalhar comigo, em breve entrarei em contato!');
            $('#title2').text('Email Enviado com sucesso!');
            $('#btnExit').text('Fechar');
            }else{
              $('#title').text('MSGomes - Email Sent');
              $('#titleText').text('Thank you for your interest in working with me, I will contact you soon!');
              $('#title2').text('Email successfully sent!');
              $('#btnExit').text('Close');

            }
        }

        $('#btnExit').click(function(){
            window.top.close();
        });
        
    });
    </script>
  </body>
</html>
`;
/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    ignoreTLS: false,
    secure: false,
    auth: {
        user: 'mftecnologiamf@gmail.com',
        pass: 'msg34676989'
    }
});

exports.sendMailPersonal = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const nome = req.query.nome;
        const email = req.query.email;
        const msg = req.query.msg;


        const mailOptions = {
            from: email, // Something like: Jane Doe <janedoe@gmail.com>
            to: 'lilo.flp@gmail.com',
            subject: 'Contato Personal Page', // email subject
            html: '<b>Remetente:</b> '+nome +'<br><b>email:</b> '+email+'<br><b>menssagem:</b> '+msg
                
             // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send(successPageMailSend);
        });
    });    
});