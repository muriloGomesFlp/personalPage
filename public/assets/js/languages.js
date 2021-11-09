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
            $('#descSysDev').text('I have experience in developing web, Mobilie and Desktop systems. I can help you with your project by developing a new system, performing any maintenance or updating. As I mentioned, I am passionate about technology, so I love challenges, if you have a new technology that wants to use in your project, it will be a pleasure to help.');
            $('#ODcoach').text('Open data Coaching');
            $('#descODcoach').text("I search open data for six years, from my master's degree to the doctorate and can help you improve the way you are making available your data, the most suitable formats to foster data use, licenses to fence data, etc. I have experience and I can guarantee that with a good capacity building we can improve the mode and the data that are made available.");
            $('#DMeA').text('Data analytics');
            $('#descDMeA').text('In my thesis research I had to perform various data analyzes. For this, I used cleaning techniques, selection, reduction, transformation, etc., and it is possible to perform the coherent data analysis and reflecting in satisfactory results.');
            $('#webM').text('Web Mining');
            $('#descWebM').text('Web mining provides automated collection of present information from websites. This allows you to collect different data from websites or create "robots" to interact with web systems enabling collecting dynamic data that was once possible only with human interspection.');
            $('#PeSM').text('Classes, Guidelines and Consulting');
            $('#descPeSM').text('If you have doubts about technologies or subjects of your graduation, I can help you with private and punctual classes, in order to clarify doubts and help you assimilate the content. If you want help in conducting your research (masters and doctorate) or even help in your TCC, I can help! As I have a PhD and I understand the importance of good guidance and co-supervision and I believe I can help you on this journey. Furthermore, due to your vast experience in projects and mainly in open data, we can work together through consultancies and achieve interesting results.');
            $('#ReDOP').text('Servers and Cloud Computer');
            $('#descReDOP').text('As I mentioned earlier, as I have a degree in computer networking I have had good experiences with servers (one of the things I like to work with the most) and I can help you implement services, applications, network control, proxy etc. Given the new technology and possibilities of cloud computing in recent months I studied some cloud platforms and I was very comfortable with what can be done, I used Kubernets, Virtual Machine, among others. Let me help you identify in your project how cloud computing can be applied and you will be amazed by the results.');
           //Resume 
           $('#titleResume').text('Resume');
           //$('#titleResume').append('<p class=" text-center mb-2 wow fadeInUp"><span class="bg-primary text-dark px-2">Resume</span></p>');
            $('#titleMyresume').text('A summary of My Resume');
            //Education
            $('#education').text('My Education');        
            $('#PhdTitle').text('PhD in engineering and knowledge management');
            $('#PhdUniversity').text('Federal University of Santa Catarina (UFSC) / 2017 - 2021');
            $('#PhdDesc').text("In my doctorate I continued at PPEGC and in the same area of ​​concentration. As I was a graduate of the course, I was able to focus on participating in several projects and enjoy improving my developer and server skills. I could work with different languages ​​PHP, Python, Js and libraries, in addition to different SQL, NoSQL and SPARQL databases. Since my dissertation is related to open data, I naturally continued with the theme, however, realizing the difficulty of using open data made available by public/private organizations due to several problems, I decided to propose a model that could evaluate open data portals and the data made available. Due to the large volume of data that a data portal has, a system was developed for automated collection, application of the model, evaluation and analysis of data from open data portals, this system was called Open Data Portal Evaluation System – SiAPDA.");
            $('#masterTitle').text('Master in engineering and knowledge management');
            $('#masterUniversity').text('Federal University of Santa Catarina (UFSC) / 2015 - 2017');
            $('#masterDesc').text("The Postgraduate Course in Knowledge Engineering and Management (PPEGC) has three areas of concentration, Knowledge Management, Knowledge Engineering and Knowledge Media. When I attended the master's degree, I chose the Knowledge Engineering concentration area, as this area uses the cognitive vision to carry out research and development of methods, techniques and tools that enable the construction of a model and knowledge systems. In my dissertation I research innovation ecosystems versus software ecosystems to understand their differences and propose an architecture for open data ecosystems.");
            $('#cntTitle').text('Computer network technologist');
            $('#cntUniversity').text('University of Southern Santa Catarina (UNISUL) / 2007 - 2013');
            $('#cntDesc').text("Computer Networks is a course that aims to train professionals capable of designing, developing and implementing computer networks. The professional is also responsible for proposing improvements, integrating and maintaining a company's network. In my graduation I had the opportunity to glimpse several disciplines, programming, network management, network security, server administration, structured cabling, among others. This was important, as I got a know-how on how to set up and configure servers, for example, Web servers, Proxy, etc. In my TCC an Asterix server in VoIP was mounted for sending and receiving faxes, it was used in the Ubunto Server as OS.");
            //Experience
            $('#experience').text('My Experience');
            $('#mftTitle').text('Businessperson');
            $('#mftCompany').text('MF Tecnology / 2010 -2013');
            $('#mftDesc').text('Installation of CCTV surveillance system, installation of automation systems; installation of concierge systems, installation of telephone system and computer networks; maintenance of Linux and Windows Servers, Maintenance of printers; User support, Maintenance of computers and notebooks.');
            $('#senaiTitle').text('Collaborator - Computer Specialist I');
            $('#senaiCompany').text('National Service for Industrial Learning - SENAI / 2013 - 2015');
            $('#senaiDesc').text('Technical level and qualified teacher, also acting as an Educational Technology Facilitator, focusing on helping teachers in the classroom, introducing them to new technologies, new teaching approaches and developing teaching materials. Also acting as Interlocutor of Innovation Mechanisms, which has as inherent activities the Pre-incubator, Inova SENAI/SC, Incentive to teaching publication, E-Tech Magazine. As well as performing the role of administrator of the test center at VUE Pearson.');
            $('#UFSCtitle').text('Scholarship holder');
            $('#UFSCcompany').text('Federal University of Santa Catarina (UFSC) / 2015 - 2021');        
            $('#UFSCdesc').text("From my master's to my doctorate I've been involved in different projects and events. I worked as organizer of academic events, managed EasyChair (academic article submission platform), implemented services and systems to assist in the academic activities of the Graduate Program in Engineering and Knowledge Management — PPEGC, such as: Open Journal System , Wordpress, Certificate Management System, among others. I was also able to work on important projects such as the Alignment of the National School of Agricultural Management (ENAGRO) with MAPA's Knowledge Management and Public Governance, V State Conference on Science, Technology and Innovation of Santa Catarina, Observatory for the Promotion of Innovation in the Santa Catarina Industry ,  among others.");
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


            $('#btn_lattes').text('View Curriculum Lattes');
            $('#btn_lattes').attr('href','http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8589066A6&idiomaExibicao=2');

            $('#btn_vitae').text('View Curriculum Vitae');
            $('#btn_vitae').attr('href','https://firebasestorage.googleapis.com/v0/b/gcf-teste.appspot.com/o/personalPage%2FCurriculoVitaEN.pdf?alt=media');
            $('#btn_vitae').attr('target', '_blank');

            //portifolio 
            $('#portifolioTitle').text('Portfolio')
            $('#subTitlePortfolio').text('Some of my most recent projects');
            $('#portiFilterAll').text('All');
            $('#portiFilterWebSys').text('Web Systems');
            $('#portiFilterApp').text('Mobile Apps');
            $('#portiFilterSites').text('Web Sites');
            $('#portiFilterYoutube').text('YouTube Videos');
            $('.webSysGroup').text('Web Systems');
            $('.mobileApp').text('Mobilie Aplications');
            $('.youtubeAcademic').text('YouTube Academic Videos');
            $('.youtubeSys').text('YouTube Systems Videos');
            $('#projSiAPDA').text('Project SiAPDA');
            $('#projSAMDA').text('Project SAMDA');
            $('#projSiGMA').text('Project SiGMA');
                //Proj1
            $('#project_siapda').attr('href', 'projects/siapda_en.html');
            $('#project_samda').attr('href', 'projects/samda_en.html');
            $('#project_sigma').attr('href', 'projects/sigma_en.html');
            $('#project_appGcf').attr('href', 'projects/gcf_en.html');

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
            $('#descSysDev').text('Possuo experiência em desenvolver sistemas Web, Mobilie e Desktop. Posso ajudá-lo seu projeto, desenvolvendo um novo sistema, realizar alguma manutenção ou atualização. Como mencionei, sou apaixonado por tecnologia, então adoro desafios, caso tenha uma nova tecnologia que queira utilizar em seu projeto, será um prazer em ajudar.');
            $('#ODcoach').text('Capacitação acerca de dados abertos');
            $('#descODcoach').text('Pesquiso dados abertos à seis anos, desde o meu mestrado até o doutorado e posso ajudá-lo a melhorar a maneira que está disponibilizando seus dados, os formatos mais adequado para fomentar o uso dos dados, as licenças a cerca dos dados etc. Tenho experiência e posso garantir que com uma boa capacitação podemos melhorar o modo e os dados que são disponibilizados.');
            $('#DMeA').text('Análise de dados');
            $('#descDMeA').text('Na minha pesquisa de tese tive que realizar diversas análises de dados. Para isso, utilizei de técnicas de limpeza, seleção, redução, transformação etc, sendo possível realizar à análise de dados coerente e que reflita em resultados satisfatórios.');
            $('#webM').text('Mineração da Web');
            $('#descWebM').text('A mineração Web proporciona a coleta automatizada de informações presentes de Websites. Isso permite coletar diferentes dados oriundos de sites ou mesmo criar “robôs” para interagir com sistemas Web possibilitando coletar dados dinamicos que antes era possível apenas com a interção humana.');
            $('#PeSM').text('Aulas, Orientação e Consultoria');
            $('#descPeSM').text('Se você possui dúvidas em relação a tecnologias ou disciplinas de sua graduação posso lhe ajudar com aulas particulares e pontuais, de modo a esclarecer dúvidas e ajudá-lo a assimilar o conteúdo. Caso queira auxilio na condução de sua pesquisa (mestrado e doutorado) ou mesmo auxilio no seu TCC, posso ajudar! Como possuo doutorado e entendo a importância de uma boa orientação e coorientação e acredito que posso auxiliar você nessa jornada. Além disso, por te uma vasta experiência em projetos e principalmente em dados abertos, podemos trabalhar juntos por meio de consultorias e atingir resultados interessantes');
            $('#ReDOP').text('Servidores e Compução em Nuvem');
            $('#descReDOP').text('Como mencionei anteriormente, por possui uma graduação na área de redes de computadores tive boas experiências com servidores (uma das coisas que mais gosto de trabalhar) e posso ajudá-lo a implementar serviços, aplicações, controle de rede, proxy etc. Dado as novas tecnologia e possibilidades da computação em nuvem nesses últimos meses  estudei algumas plataformas de nuvem e fiquei muito à vontade com o que pode ser feito, usei de Kubernets, Virtual Machine, entre outros. Deixe me ajudar a identificar em seu projeto como a computação em nuvem pode ser aplicado e você vai se surpreender com os resultados.');
           //Resume 
            $('#titleResume').text('Resumo');
            $('#titleMyresume').text('Resumo do meu currículo');
            //Education
            $('#education').text('Minha Escolaridade');        
            $('#PhdTitle').text('Doutor em Engenharia e Gestão do Conhecimento');
            $('#PhdUniversity').text('Universidade Federal de Santa Catarina (UFSC) / 2017 - 2021');
            $('#PhdDesc').text('No meu doutorado continuei no Pós-graduação em Engenharia e Gestão do conhecimento - PPEGC e na mesma área de concentração. Como eu era egresso do curso, consegui me focar em participar de diversos projetos e aproveitar aperfeiçoar minhas habilidades de desenvolvedor e com servidores. Pude trabalhar com diferentes linguagens PHP, Python, Js e bibliotecas, além de diferentes bancos de dados SQL, NoSQL e SPARQL. Dado a minha dissertação ser relacionada com dados abertos, naturalmente continuei com o tema, contudo, percebendo a dificuldade de utilizar dos dados abertos disponibilizados por organizações públicas/privadas por conta de diversos problemas, decidi propor um modelo que pudesse avaliar os portais de dados abertos e os dados disponibilizados. Por conta do grande volume de dados que um portal de dados possui, foi desenvolvido um sistema para coleta automatizada, aplicação do modelo, avaliação e análise dos dados oriundos dos portais de dados abertos, esse sistema foi denominado Sistema de Avaliação de portais de Dados Abertos – SiAPDA.');
            $('#masterTitle').text('Mestre em Engenharia e Gestão do Conhecimento');
            $('#masterUniversity').text('Universidade Federal de Santa Catarina (UFSC) / 2015 - 2017');
            $('#masterDesc').text('O curso de Pós-graduação em Engenharia e Gestão do conhecimento - PPEGC possui três áreas de concentração, a Gestão do Conhecimento, a Engenharia do Conhecimento e a Mídia do Conhecimento. Quando cursei o mestrado escolhi a área de concentração de Engenharia do Conhecimento, pois esta área usa da visão cognitivista para realizar pesquisa e desenvolvimento de métodos, técnicas e ferramentas que possibilitem a construção de modelo e sistemas de conhecimento. Na minha dissertação pesquisa sobre ecossistemas de inovação X ecossistemas de software para entender suas diferenças e propor uma arquitetura para ecossistemas de dados abertos.');
            $('#cntTitle').text('Tecnólogo em Redes de Computadores');
            $('#cntUniversity').text('Universidade do Sul de Santa Catarina (UNISUL) / 2007 - 2013');
            $('#cntDesc').text('Redes de Computadores é um curso que tem como objetivo formar profissionais capacitados para projetar, desenvolver e implantar redes de computadores. O profissional ainda é responsável por propor melhorias, integrar e fazer a manutenção da rede de uma empresa.Na minha graduação tive a oportunidade de vislumbrar várias disciplinas, programação, gestão de redes, segurança em redes, administração de servidores, cabeamento estruturado, dentre outras. Isso foi importante, pois obtive um know-how de como montar e configurar servidores, como exemplo, servidores Web, Proxy, etc. Em meu TCC foi montado um servidor Asterix em VoIP para o envio e recebimento de fax, foi utilizado no Ubunto Server como OS.');
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
            $('#UFSCdesc').text('Desde o meu mestrado ate o doutorado estive envolvido em diferentes projetos e eventos. Trabalhei como organizador de eventos acadêmicos, gerenciei o EasyChair (plataforma de submissão de artigos acadêmicos), implementei serviços e sistemas para auxiliar nas atividades acadêmicas do Programa de Pós-Graduação em Engenharia e Gestão do Conhecimento — PPEGC, tais como: Open Journal System , Wordpress, Sistema de Gerenciamento de Certificados, dentre outros. Também pude trabalhar em projetos importantes como o Alinhamento da Escola Nacional de Gestão Agropecuária (ENAGRO) à Gestão do Conhecimento e Governança Pública do MAPA., V Conferência Estadual de Ciência, Tecnologia e Inovação de Santa Catarina, Observatório para fomento da Inovação na Industria Catarinense,  dentre outros.');
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

            $('#btn_vitae').text('Visualizar Currículo Vitae');
            $('#btn_vitae').attr('href','https://firebasestorage.googleapis.com/v0/b/gcf-teste.appspot.com/o/personalPage%2FCurriculo%20Vitae.pdf?alt=media');
            $('#btn_vitae').attr('target', '_blank');
            //portifolio 
            $('#portifolioTitle').text('Portfólio')
            $('#subTitlePortfolio').text('Alguns dos meus projetos');
            $('#portiFilterAll').text('Todos');
            $('#portiFilterWebSys').text('Sistemas Web');
            $('#portiFilterApp').text('Aplicativos Mobile');
            $('#portiFilterSites').text('Web Sites');
            $('#portiFilterYoutube').text('Vídeos no Youtube');
            $('.webSysGroup').text('Sistemas Web');
            $('.mobileApp').text('Aplicativos Mobilie');
            $('#projSiAPDA').text('Projeto SiAPDA');
            $('#projSAMDA').text('Projeto SAMDA');
            $('#projSiGMA').text('Projeto SiGMA');
            $('.youtubeAcademic').text('YouTube Vídeos Academicos');
            $('.youtubeSys').text('YouTube Vídeos de Sistemas');
            $('#project_siapda').attr('href', 'projects/siapda_pt.html');
            $('#project_samda').attr('href', 'projects/samda_pt.html');
            $('#project_sigma').attr('href', 'projects/sigma_pt.html');
            $('#project_appGcf').attr('href', 'projects/gcf_pt.html');
            
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
