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

navToggleBtn.addEventListener('click', function() { 
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
});

/**
 * Alternar entre Habilidades e Ferramentas
 */
const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

for(let i = 0; i < toggleBtns.length; i++){
    toggleBtns[i].addEventListener('click', function(){
        elemToggleFunc(toggleBtnBox);

        // Remove a classe active de todos e adiciona no clicado
        for(let j = 0; j < toggleBtns.length; j++) { 
             // Pequena correção: garante que a lógica visual de troca funcione
             toggleBtns[j].classList.remove('active');
        }
        this.classList.add('active'); // Adiciona active só no botão clicado

        elemToggleFunc(skillsBox);
    });
}

/**
 * Tema Dark / Light (com persistência no LocalStorage)
 */
const themeToggleBtn = document.querySelector('[data-theme-btn]');

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

/**
 * 🚀 AUTOMAÇÃO DO FORMULÁRIO PARA WHATSAPP
 * Captura os dados e envia para o seu número
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

        // 2. Define o seu número de WhatsApp (formato internacional sem +)
        const myPhoneNumber = '5582993138953'; 

        // 3. Cria a mensagem formatada (pula linhas com %0A)
        const fullMessage = `*Novo Contato do Site Portfolio* 🚀%0A%0A` +
                            `👤 *Nome:* ${name}%0A` +
                            `📧 *Email:* ${email}%0A` +
                            `📱 *Telefone:* ${phone}%0A%0A` +
                            `📝 *Mensagem:*%0A${message}`;

        // 4. Cria o link oficial do WhatsApp API
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${fullMessage}`;

        // 5. Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // Opcional: Limpar o formulário após enviar
        // contactForm.reset(); 
    });
}
