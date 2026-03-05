'use strict';

/**
 * Funções Auxiliares
 */

// Função para alternar classe 'active'
const elemToggleFunc = function(elem) { elem.classList.toggle('active'); }

/**
 * Header & Botão "Voltar ao Topo" (Sticky)
 */
const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function(){
    if(window.scrollY >= 10) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
});

/**
 * Menu Mobile (Toggle)
 */
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

if (navToggleBtn && navbar) {
    navToggleBtn.addEventListener('click', function() { 
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
    });
}

/**
 * Alternar entre Habilidades e Ferramentas
 */
const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

if (toggleBtns.length > 0) {
    for(let i = 0; i < toggleBtns.length; i++){
        toggleBtns[i].addEventListener('click', function(){
            // Se o botão já está ativo, não faz nada
            if (this.classList.contains('active')) return;

            elemToggleFunc(toggleBtnBox);

            // Remove a classe active de todos e adiciona no clicado
            for(let j = 0; j < toggleBtns.length; j++) { 
                 toggleBtns[j].classList.remove('active');
            }
            this.classList.add('active');

            elemToggleFunc(skillsBox);
        });
    }
}

/**
 * Tema Dark / Light (com persistência no LocalStorage)
 */
const themeToggleBtn = document.querySelector('[data-theme-btn]');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function(){
        elemToggleFunc(themeToggleBtn);

        if(themeToggleBtn.classList.contains('active')){
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // Verifica a preferência salva ao carregar a página
    if(localStorage.getItem('theme') === 'light-theme'){
        themeToggleBtn.classList.add('active');
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        themeToggleBtn.classList.remove('active');
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}

/**
 * 🚀 AUTOMAÇÃO DO FORMULÁRIO PARA WHATSAPP
 */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar

        // 1. Captura os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // 2. Define o seu número de WhatsApp
        const myPhoneNumber = '5582993138953'; 

        // 3. Cria a mensagem bruta
        const rawMessage = `*Novo Contato do Site Portfolio* 🚀\n\n` +
                           `👤 *Nome:* ${name}\n` +
                           `📧 *Email:* ${email}\n` +
                           `📱 *Telefone:* ${phone}\n\n` +
                           `📝 *Mensagem:*\n${message}`;

        // 4. Cria o link oficial do WhatsApp API codificando o texto (evita bugs)
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${encodeURIComponent(rawMessage)}`;

        // 5. Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // 6. Limpa o formulário
        contactForm.reset(); 
    });
}

/**
 * 🌍 SISTEMA DE TRADUÇÃO COMPLETO
 */
const translations = {
    "pt": {
        "navHome": "Home", "navAbout": "Sobre mim", "navSkills": "Habilidades", "navProjects": "Projetos", "navContact": "Contato",
        "heroTitle": "Especialista em Automação", "heroBtn": "CONTATAR", "heroScroll": "Desenvolvedor",
        "statsExp": "Anos de Experiência", "statsProj": "Projetos Finalizados", "statsClients": "Clientes Satisfeitos",
        "aboutSub": "Sobre mim", "aboutTitle": "Precisa de um projeto? Entre em contato!", 
        "aboutText": "Olá, sou Santiago Carvalho, tenho mais de 10 anos de experiência em desenvolvimento web. Atuo na criação de sites, landing pages, bots, sistemas e aplicações web sob medida, com foco em performance e automação. A maior parte dos meus projetos é voltada para o mercado de opções binárias, onde desenvolvo soluções robustas e inteligentes. Trabalho com modelos de licenciamento, permitindo o uso exclusivo ou a revenda dos sistemas. Busco sempre entregar produtos funcionais, escaláveis e prontos para gerar resultados reais.",
        "aboutBtn1": "Contrate-me", "aboutBtn2": "Baixar currículo",
        "skillsSub": "Minhas Habilidades", "skillsTitle": "Quais são as minhas habilidades em programação?",
        "skillsText": "Eu desenvolvo interfaces de usuário simples, intuitivas e responsivas que ajudam os usuários a realizarem suas tarefas com menos esforço e tempo, utilizando essas tecnologias.",
        "skillsTab1": "Habilid.", "skillsTab2": "Ferr.",
        "portSub": "Meus Trabalhos", "portTitle": "Veja meus trabalhos que vão te surpreender!",
        "portText": "Crio bot inteligente com alta assertividade, desenvolvo indicador personalizado, site moderno, sistema robusto e aplicação web inovadora que transforma a experiência do usuário. Minha solução une tecnologia de ponta e design elegante para entregar uma interface limpa, intuitiva e altamente funcional — perfeita para qualquer público, inclusive para quem não tem conhecimento técnico. Garanto qualidade duradoura, performance excepcional e resultados que impulsionam seu negócio no longo prazo.",
        "portCard1Title": "Bot de Sinais Ao Vivo", "portCard1Time": "Para o Telegram",
        "portCard2Title": "Bot Copytrader", "portCard2Time": "Versão para telegram e desktop",
        "portCard3Title": "Bot para computador", "portCard3Time": "Várias estratégias",
        "portCard4Title": "Indicador OB", "portCard4Time": "Para várias corretoras",
        "portCard5Title": "Bot para o Telegram", "portCard5Time": "Várias funções",
        "portCard6Title": "Indicador MT4", "portCard6Time": "Assertividade absurda",
        "portMore": "Ver mais projetos...",
        "contactSub": "Contato", "contactTitle": "Tem algum projeto? Envie uma mensagem!",
        "contactText": "Entre em contato e me avise se eu puder ajudar! Preencha o formulário e entrarei em contato o mais rápido possível.",
        "contactAddress": "Endereço: ", "contactPhone": "Telefone: ", "contactWpp": "Whatsapp e Telefone", "contactEmailLabel": "E-mail: ",
        "contactLabelName": "Seu nome", "contactLabelEmailField": "E-mail", "contactLabelPhone": "Telefone (preferência Whatsapp)", "contactLabelMsg": "Mensagem", "contactBtn": "Enviar",
        "footerCopy": "Todos os direitos reservados",
        "phName": "Santiago Carvalho", "phEmail": "seuemail@gmail.com", "phPhone": "Número do telefone", "phMsg": "Escreva aqui sua mensagem"
    },
    "en": {
        "navHome": "Home", "navAbout": "About Me", "navSkills": "Skills", "navProjects": "Projects", "navContact": "Contact",
        "heroTitle": "Automation Specialist", "heroBtn": "HIRE ME", "heroScroll": "Developer",
        "statsExp": "Years of Experience", "statsProj": "Completed Projects", "statsClients": "Satisfied Clients",
        "aboutSub": "About me", "aboutTitle": "Need a project? Get in touch!", 
        "aboutText": "Hello, I'm Santiago Carvalho. I have over 10 years of experience in web development. I create custom websites, landing pages, bots, systems, and web applications, focusing on performance and automation. Most of my projects are aimed at the binary options market, where I develop robust and intelligent solutions. I work with licensing models, allowing exclusive use or resale of the systems. I always seek to deliver functional, scalable products ready to generate real results.",
        "aboutBtn1": "Hire me", "aboutBtn2": "Download CV",
        "skillsSub": "My Skills", "skillsTitle": "What are my programming skills?",
        "skillsText": "I develop simple, intuitive, and responsive user interfaces that help users accomplish their tasks with less effort and time, using these technologies.",
        "skillsTab1": "Skills", "skillsTab2": "Tools",
        "portSub": "My Work", "portTitle": "See my work that will surprise you!",
        "portText": "I create intelligent bots with high assertiveness, develop custom indicators, modern websites, robust systems, and innovative web applications that transform the user experience. My solution combines cutting-edge technology and elegant design to deliver a clean, intuitive, and highly functional interface — perfect for any audience, including those without technical knowledge. I guarantee lasting quality, exceptional performance, and results that drive your business forward in the long term.",
        "portCard1Title": "Live Signals Bot", "portCard1Time": "For Telegram",
        "portCard2Title": "Copytrader Bot", "portCard2Time": "Telegram and desktop version",
        "portCard3Title": "Desktop Bot", "portCard3Time": "Various strategies",
        "portCard4Title": "BO Indicator", "portCard4Time": "For multiple brokers",
        "portCard5Title": "Telegram Bot", "portCard5Time": "Various functions",
        "portCard6Title": "MT4 Indicator", "portCard6Time": "Absurd assertiveness",
        "portMore": "See more projects...",
        "contactSub": "Contact", "contactTitle": "Have a project? Send a message!",
        "contactText": "Get in touch and let me know if I can help! Fill out the form and I will contact you as soon as possible.",
        "contactAddress": "Address: ", "contactPhone": "Phone: ", "contactWpp": "Whatsapp and Phone", "contactEmailLabel": "E-mail: ",
        "contactLabelName": "Your name", "contactLabelEmailField": "E-mail", "contactLabelPhone": "Phone (preferably Whatsapp)", "contactLabelMsg": "Message", "contactBtn": "Send",
        "footerCopy": "All rights reserved",
        "phName": "Santiago Carvalho", "phEmail": "youremail@gmail.com", "phPhone": "Phone number", "phMsg": "Write your message here"
    },
    "es": {
        "navHome": "Inicio", "navAbout": "Sobre mí", "navSkills": "Habilidades", "navProjects": "Proyectos", "navContact": "Contacto",
        "heroTitle": "Especialista en Automatización", "heroBtn": "CONTACTAR", "heroScroll": "Desarrollador",
        "statsExp": "Años de Experiencia", "statsProj": "Proyectos Finalizados", "statsClients": "Clientes Satisfechos",
        "aboutSub": "Sobre mí", "aboutTitle": "¿Necesitas un proyecto? ¡Contáctame!", 
        "aboutText": "Hola, soy Santiago Carvalho, tengo más de 10 años de experiencia en desarrollo web. Trabajo en la creación de sitios web, landing pages, bots, sistemas y aplicaciones web a medida, con un enfoque en el rendimiento y la automatización. La mayor parte de mis proyectos está dirigida al mercado de opciones binarias, donde desarrollo soluciones robustas e inteligentes. Trabajo con modelos de licencia, permitiendo el uso exclusivo o la reventa de los sistemas. Siempre busco entregar productos funcionales, escalables y listos para generar resultados reales.",
        "aboutBtn1": "Contrátame", "aboutBtn2": "Descargar CV",
        "skillsSub": "Mis Habilidades", "skillsTitle": "¿Cuáles son mis habilidades de programación?",
        "skillsText": "Desarrollo interfaces de usuario simples, intuitivas y responsivas que ayudan a los usuarios a realizar sus tareas con menos esfuerzo y tiempo, utilizando estas tecnologías.",
        "skillsTab1": "Habilid.", "skillsTab2": "Herram.",
        "portSub": "Mis Trabajos", "portTitle": "¡Mira mis trabajos que te sorprenderán!",
        "portText": "Creo bots inteligentes con alta asertividad, desarrollo indicadores personalizados, sitios web modernos, sistemas robustos y aplicaciones web innovadoras que transforman la experiencia del usuario. Mi solución combina tecnología de punta y diseño elegante para entregar una interfaz limpia, intuitiva y altamente funcional — perfecta para cualquier público, incluso para quienes no tienen conocimientos técnicos. Garantizo calidad duradera, rendimiento excepcional y resultados que impulsan tu negocio a largo plazo.",
        "portCard1Title": "Bot de Señales en Vivo", "portCard1Time": "Para Telegram",
        "portCard2Title": "Bot Copytrader", "portCard2Time": "Versión para telegram y escritorio",
        "portCard3Title": "Bot para computadora", "portCard3Time": "Varias estrategias",
        "portCard4Title": "Indicador OB", "portCard4Time": "Para varios brokers",
        "portCard5Title": "Bot para Telegram", "portCard5Time": "Varias funciones",
        "portCard6Title": "Indicador MT4", "portCard6Time": "Asertividad absurda",
        "portMore": "Ver más proyectos...",
        "contactSub": "Contacto", "contactTitle": "¿Tienes algún proyecto? ¡Envía un mensaje!",
        "contactText": "¡Ponte en contacto y hazme saber si puedo ayudar! Completa el formulario y me pondré en contacto contigo lo antes posible.",
        "contactAddress": "Dirección: ", "contactPhone": "Teléfono: ", "contactWpp": "Whatsapp y Teléfono", "contactEmailLabel": "Correo: ",
        "contactLabelName": "Tu nombre", "contactLabelEmailField": "Correo electrónico", "contactLabelPhone": "Teléfono (preferencia Whatsapp)", "contactLabelMsg": "Mensaje", "contactBtn": "Enviar",
        "footerCopy": "Todos los derechos reservados",
        "phName": "Santiago Carvalho", "phEmail": "tuemail@gmail.com", "phPhone": "Número de teléfono", "phMsg": "Escribe tu mensaje aquí"
    }
};

const langSelect = document.getElementById('lang');

if (langSelect) {
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value; 
        
        // 1. Traduzir Textos normais
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n'); 
            if (translations[selectedLang] && translations[selectedLang][key]) {
                element.textContent = translations[selectedLang][key];
            }
        });

        // 2. Traduzir Placeholders do formulário
        const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
        placeholdersToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[selectedLang] && translations[selectedLang][key]) {
                element.placeholder = translations[selectedLang][key];
            }
        });
        
        // Salva a escolha do usuário
        localStorage.setItem('language', selectedLang);
    });

    // Mantém o idioma atualizado quando a página recarrega
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        langSelect.value = savedLang;
        langSelect.dispatchEvent(new Event('change')); 
    }
}
