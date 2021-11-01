$(window).ready(function() { 

    var userLang = navigator.language || navigator.userLanguage    
    var btn_lang;
    var typed;  
    
         
    if (userLang.includes('en')){
        language('en');
    }else if (userLang.includes('es')){
        language('es')
    }else{
        language('pt-br')
    }

    $('.btn_lang').click(function () {       
        btn_lang = this.getAttribute('data-lang');
        cleanAppends();
        language(btn_lang);
        
    });


    function language(lang){        
        if(lang == 'en'){               
            typedTexts=['Systems development','Project and Service Management','Research and Innovation'];
            if(typeof(typed) == 'undefined'){
                typedControl(typedTexts);
            }else{
                typed.destroy();
                typedControl(typedTexts);

            }   
            //head
            $('title').text('MSGomes - Murilo Silveira Gomes - Personal Page');
            $('html').attr('lang', 'us-EN');            
            //navbar
            $('#home').text('Home');
            $('#about').text('About');
            $('#services').text('Services');
            $('#resume').text('Resume');
            $('#portfolio').text('Portfolio');
            $('#faq').text('FAQ');
            $('#testimonial').text('Client');
            $('#contact').text('Contact');
            //intro
            $('#firstTextIntro').text("Hi, I can help you?");
            $('#btn_works').text('View My Works');
            //about
            $('#aboutMeTxt').text('About Me');
            $('#knowMoreText').text('Know Me More');
            $('#textMeHi').append('<h2 id="hi" class="text-8 fw-400 mb-3">I'+"'"+'m<span class="fw-700 border-bottom border-3 border-primary"> Murilo Silveira Gomes</span></h2>');
            $('#textMe1').text("Hi, I'm a passionate research and technology developer. I believe these universes complement each other.");
            $('#textMe2').text("I have a PhD in engineering and knowledge management, with a focus on knowledge engineering. My research was about open data, with the objective of proposing an evaluation model of open data portals and their data, considering good data practices on the Web and recommendations based on literature.");
            $('#textMe3').text("In order to apply my study, I developed a web tool called the open data portal evaluation system (SiAPDA).Throughout my academic life, I had the opportunity to work with different technologies and I fell in love with what can be done in conjunction with research, and I fully understand the importance of this universe.");
            $('#textMe4').text("So let me help you take your idea, project or why not your research, and with the help of technology get fantastic results!");
            $('#expirience').append('<h3 id="descExpirience" class="text-7 wow rubberBand" data-wow-delay="2s">Years of <span class="fw-700">Experiance</span></h3>');
            $('#name').text('Name:');
            $('#labelDateBirth').text('Date of birth:');
            $('#dateBirth').text('06 September, 1989');
            $('#labelFrom').text('From:');
            $('#from').text('Camboriú - Santa Catarina - Brazil');
           //Services
            $('#titleIdoYou').text('What I Do?');
            $('#titleNextProj').text('How I can help your next project');
            $('#sysDev').text('Systems Development');
            $('#descSysDev').text('Describe...');
            $('#ODcoach').text('Open data Coaching');
            $('#descODcoach').text('Describe...');
            $('#DMeA').text('Data analytics');
            $('#descDMeA').text('Describe...');
            $('#webM').text('Web Mining');
            $('#descWebM').text('Describe...');
            $('#PeSM').text('IT project and services management');
            $('#descPeSM').text('Describe...');
            $('#ReDOP').text('Research and Development on Open Data');
            $('#descReDOP').text('Describe...');
           //Resume 
           $('#titleResume').text('Resume');
           //$('#titleResume').append('<p class=" text-center mb-2 wow fadeInUp"><span class="bg-primary text-dark px-2">Resume</span></p>');
            $('#titleMyresume').text('A summary of My Resume');
            //Education
            $('#education').text('My Education');        
            $('#PhdTitle').text('PhD in engineering and knowledge management');
            $('#PhdUniversity').text('Federal University of Santa Catarina / 2017 - 2021');
            $('#PhdDesc').text('Describe...');
            $('#masterTitle').text('Master in engineering and knowledge management');
            $('#masterUniversity').text('Federal University of Santa Catarina / 2015 - 2017');
            $('#masterDesc').text('Describe...');
            $('#cntTitle').text('Computer network technologist');
            $('#cntUniversity').text('University of Southern Santa Catarina / 2007 - 2013');
            $('#cntDesc').text('Describe...');
            //Experience
            $('#experience').text('My Experience');
            $('#mftTitle').text('Businessperson');
            $('#mftCompany').text('MF Tecnology / 2010 -2013');
            $('#mftDesc').text('Installation of CCTV surveillance system, installation of automation systems; installation of concierge systems, installation of telephone system and computer networks; maintenance of Linux and Windows Servers, Maintenance of printers; User support, Maintenance of computers and notebooks.');
            $('#senaiTitle').text('Collaborator - Computer Specialist I');
            $('#senaiCompany').text('National Service for Industrial Learning - SENAI / 2013 - 2015');
            $('#senaiDesc').text('Technical level and qualified teacher, also acting as an Educational Technology Facilitator, focusing on helping teachers in the classroom, introducing them to new technologies, new teaching approaches and developing teaching materials. Also acting as Interlocutor of Innovation Mechanisms, which has as inherent activities the Pre-incubator, Inova SENAI/SC, Incentive to teaching publication, E-Tech Magazine. As well as performing the role of administrator of the test center at VUE Pearson.');
            $('#UFSCtitle').text('Scholarship holder');
            $('#UFSCcompany').text('Federal University of Santa Catarina / 2015 - 2021');        
            $('#UFSCdesc').text('Describe...');
            //skills
            $('#skillTitle').text('My Skills');
            $('#btn_lattes').text('View Lattes Curriculum');
            $('#btn_lattes').attr('href','http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8589066A6&idiomaExibicao=2');
            //portifolio 
            $('#portifolioTitle').text('Portfolio')
            $('#subTitlePortfolio').text('Some of my most recent projects');
            $('#portiFilterAll').text('All');
            $('#portiFilterWebSys').text('Web Systems');
            $('#portiFilterApp').text('Mobile Apps');
            $('#portiFilterYoutube').text('YouTube Videos');
            $('.webSysGroup').text('Web Systems');
            $('#projSiAPDA').text('Project SiAPDA');
            $('#projSAMDA').text('Project SAMDA');
            $('#projSiGMA').text('Project SiGMA');
                //Proj1
            $('.clientLabel').text('Client:');
            $('#clientNamePj1').text('Murilo Silveira Gomes | Federal University of Santa Catarina')

            //Call Action
            $('#interested').text('Interested in working with me?')
            $('#btn_callAction').text('Hire Me!')
            //FAQ
            $('#haveQuestion').text('Have any questions?')



        }else if(lang == 'pt-br'){
            typedTexts=['Desenvolvimento de Sistemas','Gestão de Projetos e Serviço','Pesquisa e Inovação'];
            if(typeof(typed) == 'undefined'){
                typedControl(typedTexts);              

            }else{
                typed.destroy();
                typedControl(typedTexts);
            }  
            //head
            $('title').text('MSGomes - Murilo Silveira Gomes - Página Pessoal');
            $('html').attr('lang', 'pt-BR');            
            //navbar
            $('#home').text('Início');
            $('#about').text('Sobre');
            $('#services').text('Serviços');
            $('#resume').text('Resumo');
            $('#portfolio').text('Portfólio');
            $('#faq').text('FAQ');
            $('#testimonial').text('Cliente');
            $('#contact').text('Contato');
            //intro
            $('#firstTextIntro').text("Olá, Posso te ajudar?");
            $('#btn_works').text('Meus Trabalhos');
            //about
            $('#aboutMeTxt').text('Sobre Mim');
            $('#knowMoreText').text('Me Conheça Mais');
            $('#textMeHi').append('<h2 id="hi" class="text-8 fw-400 mb-3">Eu sou<span class="fw-700 border-bottom border-3 border-primary"> Murilo Silveira Gomes</span></h2>');
            $('#textMe1').text("Olá, eu sou um desenvolvedor apaixonado por pesquisa e tecnologias. Acredito que estes universos se complementam.");
            $('#textMe2').text("Possuo doutorado em Engenharia e Gestão do Conhecimento, com foco na Engenharia do Conhecimento. Minha pesquisa foi acerca de dados abertos, com o objetivo de propor um modelo de avaliação dos portais de dados abertos e seus dados, considerando as boas práticas de dados na Web e as recomendações baseadas na literatura.");
            $('#textMe3').text("Para que fosse possível aplicar o meu estudo desenvolvi uma ferramenta Web denominada de open data portal evaluation system (SiAPDA). Ao longo da minha vida acadêmica, tive a oportunidade de trabalhar com diferentes tecnologias e me apaixonei pelo que pode ser feito em conjunto com a pesquisa, e compreendo bem a importância deste universo.");
            $('#textMe4').text("Então deixe eu ajudar você a tirar do papel sua ideia, projeto ou porque não sua pesquisa e com o auxílio da tecnologia obter resultados fantásticos!");
            $('#expirience').append('<h3 id="descExpirience" class="text-7 wow rubberBand" data-wow-delay="2s">Anos de <span class="fw-700">Experiência</span></h3>');
            $('#name').text('Nome:');
            $('#labelDateBirth').text('Data de Nascimento:');
            $('#dateBirth').text('06 de Setembro de 1989');
            $('#labelFrom').text('Resido em:');
            $('#from').text('Camboriú - Santa Catarina - Brasil');
           //Services
            $('#titleIdoYou').text('O que eu faço?');
            $('#titleNextProj').text('Como eu posso ajudar você em seu próximo projeto');
            $('#sysDev').text('Desenvolvimento de Sistemas');
            $('#descSysDev').text('Describe...');
            $('#ODcoach').text('Capacitação acerca de dados abertos');
            $('#descODcoach').text('Describe...');
            $('#DMeA').text('Análise de dados');
            $('#descDMeA').text('Describe...');
            $('#webM').text('Mineração da Web');
            $('#descWebM').text('Describe...');
            $('#PeSM').text('Gerenciamento de projetos e serviços de TI');
            $('#descPeSM').text('Describe...');
            $('#ReDOP').text('Pesquisa e desenvolvimento em dados abertos');
            $('#descReDOP').text('Describe...');
           //Resume 
            $('#titleResume').text('Resumo');
            $('#titleMyresume').text('A summary of My Resume');
            //Education
            $('#education').text('Minha Escolaridade');        
            $('#PhdTitle').text('Doutro em Engenharia e Gestão do Conhecimento');
            $('#PhdUniversity').text('Universidade Federal de Santa Catarina / 2017 - 2021');
            $('#PhdDesc').text('Describe...');
            $('#masterTitle').text('Mestre em Engenharia e Gestão do Conhecimento');
            $('#masterUniversity').text('Universidade Federal de Santa Catarina / 2015 - 2017');
            $('#masterDesc').text('Describe...');
            $('#cntTitle').text('Tecnólogo em Redes de Computadores');
            $('#cntUniversity').text('Universidade do Sul de Santa Catarina / 2007 - 2013');
            $('#cntDesc').text('Describe...');
            //Experience
            $('#experience').text('Minhas Experiências');
            $('#mftTitle').text('Empresário');
            $('#mftCompany').text('MF Tecnologia / 2010 -2013');
            $('#mftDesc').text('Instalação de sistema de vigilância CFTV, Instalação de sistemas de automatização; Instalação de sistemas de portaria, Instalação de sistema de telefonia e Redes de computadores ; Manutenção de Servidores Linux e Windows, Manutenção de impressoras; Suporte ao Usuário, Manutenção de computadores e notebooks.');
            $('#senaiTitle').text('Colaborador - Especialista em Informática I');
            $('#senaiCompany').text('Serviço Nacional de Aprendizagem Industrial - SENAI / 2013 - 2015');
            $('#senaiDesc').text('Professor de nível técnico e qualificação, atuando também como Facilitador de Tecnologia Educacional, com foco em auxiliar os professores em sala de aula, apresentando a eles novas tecnologias, novas abordagens didáticas e elaborando materiais didáticos. Atuando também como Interlocutor dos Mecanismos de Inovação, que tem como atividades inerentes o Pré-incubadora, Inova SENAI/SC, Incentivo a publicação docente, Revista E-Tech. Assim como exerce a função de administrador do teste center da VUE Pearson.');
            $('#UFSCtitle').text('Bolsista / Estudante');
            $('#UFSCcompany').text('Universidade Federal de Santa Catarina / 2015 - 2021');        
            $('#UFSCdesc').text('Describe...');
            //skills
            $('#skillTitle').text('Minhas Habilidades');
            $('#btn_lattes').text('Visualizar Currículo Lattes');
            $('#btn_lattes').attr('href','http://lattes.cnpq.br/3899359603733981');

            //portifolio 
            $('#portifolioTitle').text('Portfólio')
            $('#subTitlePortfolio').text('Alguns dos meus projetos');
            $('#portiFilterAll').text('Todos');
            $('#portiFilterWebSys').text('Sistemas Web');
            $('#portiFilterApp').text('Aplicativos Mobile');
            $('#portiFilterYoutube').text('Vídeos no Youtube');
            $('.webSysGroup').text('Sistemas Web');
            $('#projSiAPDA').text('Projeto SiAPDA');
            $('#projSAMDA').text('Projeto SAMDA');
            $('#projSiGMA').text('Projeto SiGMA');
             
            $('.clientLabel').text('Cliente:');
            $('#clientNamePj1').text('Murilo Silveira Gomes | Universidade Federal de Santa Catarina')
            
            //Call Action
            $('#interested').text('Interessado em trabalhar comigo?')
            $('#btn_callAction').text('Contrate-me!')
            //FAQ
            $('#haveQuestion').text('Tem alguma pergunta?')

        }else if(lang =='es'){
        typedTexts=['Desarrollo de sistemas ',' Gestión de proyectos y servicios ',' Investigación e innovación'];
        if(typeof(typed)  == 'undefined'){
            typedControl(typedTexts);
        }else{
            typed.destroy();
            typedControl(typedTexts);
        } 
        //head
        $('title').text('MSGomes - Murilo Silveira Gomes - Página Personal');
        $('html').attr('lang', 'pt-BR');            
        //navbar
        $('#home').text('Comienzo');
        $('#about').text('Sobre');
        $('#services').text('Servicios');
        $('#resume').text('Resumen');
        $('#portfolio').text('Portafolio');
        $('#faq').text('FAQ');
        $('#testimonial').text('Cliente');
        $('#contact').text('Contacto');
        //intro
        $('#firstTextIntro').text("¿Hola, te puedo ayudar?");
        $('#btn_works').text('Mis trabajos');
        //about
        $('#aboutMeTxt').text('Sobre Mi');
        $('#knowMoreText').text('Aprende más');
        $('#textMeHi').append('<h2 id="hi" class="text-8 fw-400 mb-3">Yo soy<span class="fw-700 border-bottom border-3 border-primary"> Murilo Silveira Gomes</span></h2>');
        $('#textMe1').text("Hola, soy un desarrollador apasionado de investigación y tecnologías. Creo que estos universos complementan.");
        $('#textMe2').text("Tengo un doctorado en ingeniería y gestión del conocimiento, centrándose en la ingeniería del conocimiento. Mi investigación fue sobre datos abiertos, con el objetivo de proponer un modelo de evaluación de portales de datos abiertos y sus datos, considerando buenas prácticas de datos web y recomendaciones basadas en la literatura.");
        $('#textMe3').text("Para poder aplicar mi estudio, desarrollé una herramienta web llamada Sistema de evaluación de portal de datos abiertos (SIAPDA). A lo largo de mi vida académica, tuve la oportunidad de trabajar con diferentes tecnologías y me enamoré de lo que se puede hacer junto con la investigación, y entiendo la importancia de este universo.");
        $('#textMe4').text("Então deixe eu ajudar você a tirar do papel sua ideia, projeto ou porque não sua pesquisa e com o auxílio da tecnologia obter resultados fantásticos!");
        $('#expirience').append('<h3 id="descExpirience" class="text-7 wow rubberBand" data-wow-delay="2s">Años de <span class="fw-700">Experiencia</span></h3>');
        $('#name').text('Nombre:');
        $('#labelDateBirth').text('Fecha de nacimiento:');
        $('#dateBirth').text('06 de Setembro de 1989');
        $('#labelFrom').text('Vivo en:');
        $('#from').text('Camboriú - Santa Catarina - Brasil');
       //Services
        $('#titleIdoYou').text('¿Qué hago?');
        $('#titleNextProj').text('¿Cómo puedo ayudarlo en su próximo proyecto?');
        $('#sysDev').text('Desarrollo de sistemas');
        $('#descSysDev').text('Describe...');
        $('#ODcoach').text('Capacitación sobre datos abiertos');
        $('#descODcoach').text('Describe...');
        $('#DMeA').text('Análisis de datos');
        $('#descDMeA').text('Describe...');
        $('#webM').text('Minería web');
        $('#descWebM').text('Describe...');
        $('#PeSM').text('Proyectos y gestión de servicios de TI.');
        $('#descPeSM').text('Describe...');
        $('#ReDOP').text('Investigación y desarrollo en datos abiertos.');
        $('#descReDOP').text('Describe...');
       //Resume 
        $('#titleResume').text('Resumen');
        $('#titleMyresume').text('Un resumen de mi currículum');
        //Education
        $('#education').text('Mi educación');        
        $('#PhdTitle').text('Doctor en Ingeniería y Gestión del Conocimiento.');
        $('#PhdUniversity').text('Universidad Federal de Santa Catarina / 2017 - 2021');
        $('#PhdDesc').text('Describe...');
        $('#masterTitle').text('Máster en Ingeniería y Gestión del Conocimiento.');
        $('#masterUniversity').text('Universidad Federal de Santa Catarina / 2015 - 2017');
        $('#masterDesc').text('Describe...');
        $('#cntTitle').text('Tecnólogo en redes informáticas');
        $('#cntUniversity').text('Universidad del sur de Santa Catarina / 2007 - 2013');
        $('#cntDesc').text('Describe...');
        //Experience
        $('#experience').text('Mis experiencias');
        $('#mftTitle').text('Persona de negocios');
        $('#mftCompany').text('MF Tecnología / 2010 -2013');
        $('#mftDesc').text('Instalación del sistema de vigilancia CCTV, instalación de sistemas de automatización; Instalación de sistemas de conserjería, instalación de sistemas de telefonía y redes informáticas; Mantenimiento de servidores Linux y Windows, mantenimiento de impresoras; Soporte para usuarios, mantenimiento de computadoras y cuadernos.');
        $('#senaiTitle').text('Colaborador - Especialista en Informática I');
        $('#senaiCompany').text('Servicio Nacional de Aprendizaje Industrial - SENAI / 2013 - 2015');
        $('#senaiDesc').text('Profesor de nivel técnico y de calificación, actuando como facilitador de tecnología educativa, centrándose en ayudar a los maestros en el aula, presentándoles nuevas tecnologías, nuevos enfoques didácticos y elaboración de materiales didácticos. Actuando también como el interlocutor de los mecanismos de innovación, que tiene actividades inherentes a la preiniciadora, Inova SENAI / SC, alentando la publicación de maestros, la revista E-Tech. Así como el rol de administrador de pruebas del Centro Centro Vue Pearson Center.');
        $('#UFSCtitle').text('Beca titular / Estudiante');
        $('#UFSCcompany').text('Universidad Federal de Santa Catarina / 2015 - 2021');        
        $('#UFSCdesc').text('Describe...');
        //skills
        $('#skillTitle').text('Mis habilidades');
        $('#btn_lattes').text('Ver Currículum Lattes');
        $('#btn_lattes').attr('href','http://lattes.cnpq.br/3899359603733981');

        //portifolio 
        $('#portifolioTitle').text('Portafolio')
        $('#subTitlePortfolio').text('Algunos de mis proyectos');
        $('#portiFilterAll').text('Todos');
        $('#portiFilterWebSys').text('Sistemas Web');
        $('#portiFilterApp').text('Aplicaciones Mobile');
        $('#portiFilterYoutube').text('Videos en Youtube');
        $('.webSysGroup').text('Sistemas Web');
        $('#projSiAPDA').text('Proyecto SiAPDA');
        $('#projSAMDA').text('Proyecto SAMDA');
        $('#projSiGMA').text('Proyecto SiGMA');

        //Call Action
        $('#interested').text('¿Interesado en trabajar conmigo?')
        $('#btn_callAction').text('¡Contratame!')
        //FAQ
        $('#haveQuestion').text('¿Tiene alguna pregunta?')
    }
}
    function cleanAppends(){
        $('#hi').remove();
        $('#descExpirience').remove();    
    };

/*------------------------------------
    Typed
-------------------------------------- */
function typedControl(typedTexts){
    
    typed = new Typed('.typed', {
        strings:typedTexts,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000        
    })        
};
});