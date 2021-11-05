$(window).ready(function() { 

    var userLang = navigator.language || navigator.userLanguage    
    var btn_lang;
    var typed;  
    
         
    if (userLang.includes('pt')){
        language('pt-br');
    }else {
        language('en')
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
            $('#mHome').text('Home');
            $('#mAbout').text('About');
            $('#mServices').text('Services');
            $('#mResume').text('Resume');
            $('#mPortfolio').text('Portfolio');
            $('#mFaq').text('FAQ');
            $('#mTestimonial').text('Client');
            $('#mContact').text('Contact');
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
            $('#skillTitle').text('Technical Skills');
            $('#personalTitle').text('Personal Skills');

            $('#proactive').text('Proactive');
            $('#comunicative').text('Communicative');
            $('#teamW').text('Team work');
            $('#interested').text('Interested');
            $('#courios').text('Remote Work');
            $('#dedic').text('Dedicated');
            $('#comprome').text('Committed');
            $('#transpa').text('Transparent');

            $('#critic').text('Critical');
            $('#learn').text('Continuous Learning');
            $('#flexible').text('Flexible');
            $('#analitc').text('Self-Manageable');


            $('#btn_lattes').text('View Lattes Curriculum');
            $('#btn_lattes').attr('href','http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8589066A6&idiomaExibicao=2');
            //portifolio 
            $('#portifolioTitle').text('Portfolio')
            $('#subTitlePortfolio').text('Some of my most recent projects');
            $('#portiFilterAll').text('All');
            $('#portiFilterWebSys').text('Web Systems');
            $('#portiFilterApp').text('Mobile Apps');
            $('#portiFilterSites').text('Web Sites');
            $('#portiFilterYoutube').text('YouTube Videos');
            $('.webSysGroup').text('Web Systems');
            $('#projSiAPDA').text('Project SiAPDA');
            $('#projSAMDA').text('Project SAMDA');
            $('#projSiGMA').text('Project SiGMA');
                //Proj1
            $('#project_siapda').attr('href', 'projects/siapda_en.html');


            //Call Action
            $('#interested_2').text('Interested in working with me?')
            $('#btn_callAction').text('Hire Me!')
            //FAQ
            $('#haveQuestion').text('Have any questions?')
            $('#faq1_question').text('How can I help you?');
            $('#faq1_answer').text('I have experience for years in technology, I have always been dedicated to what I do and curious about new technologies. In this way, I believe that after a good conversation, an understanding of what you want, I can contribute with intelligent and technological solutions for your project / company.');
            $('#faq2_question').text('How do I work?');
            $('#faq2_answer').text('I have no problems with teamwork or solo." I believe that organization and good communication are keys to success, quality and commitment to deliveries. In this way, I like to organize, set the dates, map the requirements and finally start the project implementation phase.');
            $('#faq3_question').text('The technical skills I seek did not find on your personal page and now?');
            $('#faq3_answer').text("Do not worry, as I said, I have years of experience and worked in the most diverse projects throughout life. Do not be in doubt, contact me and we will solve this impasse. But if even yes I can not help you, I have a good network with excellent professionals that I'm sure will help you.");
            $('#faq4_question').text("I'm a researcher, how can I help you?");
            $('#faq4_answer').text('In addition to being passionate about technology I am a doctor in engineering and knowledge management, I worked as a teacher and I realized many research. I believe that all this experience made me realize the world otherwise, where the impossible is yes possible and what still does not exist is a matter of time to exist! In this way, let me help through research and scientificity to run your project and who knows together we develop some innovative product or solution.');
            //Contact Me
            $('#footnoteTitle').text("Let's get in touch");
            $('#footnoteDesc').text('I like to discuss new projects and challenges. Please share the most possible information so we can enjoy our first reinião and who knows how to go out with a great solution!');
            //FormMail
            $('#estimateProj').text('Estimate your project? Doubts?');
            $('#formName').text('What is Your Name:');
            $('#formEmail').text('Your Email Address:');
            $('#formDesc').text('How can I Help you?:');
            $('#btnEmail').text('Send');

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
            $('#mHome').text('Início');
            $('#mAbout').text('Sobre');
            $('#mServices').text('Serviços');
            $('#mResume').text('Resumo');
            $('#mPortfolio').text('Portfólio');
            $('#mFaq').text('FAQ');
            $('#mTestimonial').text('Cliente');
            $('#mContact').text('Contato');
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
            $('#PhdTitle').text('Doutor em Engenharia e Gestão do Conhecimento');
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
            $('#skillTitle').text('Habilidades Técnicas');
            $('#personalTitle').text('Habilidades Pessoais');
            
            $('#proactive').text('Proativo');
            $('#comunicative').text('Comunicativo');
            $('#teamW').text('Trabalho em equipe');
            $('#interested').text('Interessado');
            $('#courios').text('Trabalho Remoto');
            $('#dedic').text('Dedicado');
            $('#comprome').text('Comprometido');
            $('#transpa').text('Transparente');
            $('#critic').text('Crítico');
            $('#learn').text('Aprendizado Contínuo');
            $('#flexible').text('Flexível');
            $('#analitc').text('Autogerenciamento');

            $('#btn_lattes').text('Visualizar Currículo Lattes');
            $('#btn_lattes').attr('href','http://lattes.cnpq.br/3899359603733981');

            //portifolio 
            $('#portifolioTitle').text('Portfólio')
            $('#subTitlePortfolio').text('Alguns dos meus projetos');
            $('#portiFilterAll').text('Todos');
            $('#portiFilterWebSys').text('Sistemas Web');
            $('#portiFilterApp').text('Aplicativos Mobile');
            $('#portiFilterSites').text('Web Sites');
            $('#portiFilterYoutube').text('Vídeos no Youtube');
            $('.webSysGroup').text('Sistemas Web');
            $('#projSiAPDA').text('Projeto SiAPDA');
            $('#projSAMDA').text('Projeto SAMDA');
            $('#projSiGMA').text('Projeto SiGMA');
            $('#project_siapda').attr('href', 'projects/siapda_pt.html');
            
            //Call Action
            $('#interested_2').text('Interessado em trabalhar comigo?')
            $('#btn_callAction').text('Contrate-me!')
            //FAQ
            $('#haveQuestion').text('Tem alguma pergunta?')
            $('#faq1_question').text('Como posso Ajudar?');
            $('#faq1_answer').text('Tenho experiência a anos em tecnologia, sempre fui dedicado no que faço e curioso em relação a novas tecnologias. Desta forma, acredito que após uma boa conversa, um entendimento sobre o que você deseja, posso contribuir com soluções inteligentes e tecnológicas para seu projeto/empresa.');
            $('#faq2_question').text('Como eu trabalho?');
            $('#faq2_answer').text('Não tenho problemas com trabalho em equipe ou solo. Acredito que a organização e a boa comunicação são chaves para o sucesso, qualidade e comprometimento das entregas. Desta forma, gosto de organizar, definir as datas, mapear os requisitos e por fim, iniciar a fase de implementação do projeto.');
            $('#faq3_question').text('As habilidades técnicas que procuro não encontrei na sua página pessoal e agora?');
            $('#faq3_answer').text('Não se preocupe, como disse, tenho anos de experiência e trabalhei nos mais diversos projetos ao longo da vida. Não fique na dúvida, entre com contato comigo e resolveremos esse impasse. Mas se mesmo sim eu não consiga lhe ajudar, tenho um bom “network” com excelentes profissionais que tenho certeza que irão te ajudar.');
            $('#faq4_question').text('Sou pesquisador, como eu posso te ajudar?');
            $('#faq4_answer').text('Além de ser apaixonado por tecnologia sou doutor em engenharia e gestão do conhecimento, atuei como docente e realizei muitas pesquisas. Acredito que toda essa experiência me fez perceber o mundo de outra forma, onde o impossível é sim possível e o que ainda não existe é questão de tempo para existir! Desta forma, deixe-me ajudar por meio da pesquisa e da cientificidade a executar seu projeto e quem sabe juntos desenvolvemos algum produto ou solução inovadora.');
            //Contact me
            $('#footnoteTitle').text("Vamos entrar em contato");
            $('#footnoteDesc').text('Eu gosto de discutir novos projetos e desafios. Por favor, compartilhe o máximo de informações possíveis para que possamos aproveitar a nossa primeira reuinião e quem sabe sair com uma grande solução!');
            //sendMail
            $('#estimateProj').text('Estimar seu projeto? Dúvidas?');
            $('#formName').text('Qual seu Nome:');
            $('#formEmail').text('Seu e-mail:');
            $('#formDesc').text('Como posso ajudar você?:');
            $('#btnEmail').text('Enviar');

        }}
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