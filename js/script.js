// Script de abas para a div3

// alterna o conteúdo das abas
function activateTab(link) {
    const targetId = link.getAttribute('href').slice(1);
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.toggle('active', tab.id === targetId);
    });
}

document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activateTab(link);
    });
});

// inicializa primeira aba
document.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector('.tab-link');
    if (first) activateTab(first);
});

// Validação simples do formulário ainda presente
const form = document.getElementById('form-contato');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada! (Simulação)');
    });
}

// ===== ANIMAÇÕES DE ENTRADA =====
function animarElementos() {
    // Animar div1 (perfil) - slide left
    const div1 = document.querySelector('.div1');
    if (div1) {
        div1.classList.add('animate-slide-left');
        div1.style.animationDelay = '0.1s';
    }

    // Animar div2 (navegação) - slide left
    const div2 = document.querySelector('.div2');
    if (div2) {
        div2.classList.add('animate-slide-left');
        div2.style.animationDelay = '0.3s';
    }

    // Animar div3 (conteúdo) - slide right
    const div3 = document.querySelector('.div3');
    if (div3) {
        div3.classList.add('animate-slide-right');
        div3.style.animationDelay = '0.5s';
    }

    // Animar cards de habilidades com delay em cascata
    const habilidadeCards = document.querySelectorAll('.habilidade-card');
    habilidadeCards.forEach((card, index) => {
        card.classList.add('animate-scale');
        card.style.animationDelay = `${0.7 + (index * 0.1)}s`;
    });

    // Animar cards de projetos
    const projetoCards = document.querySelectorAll('.projeto-card');
    projetoCards.forEach((card, index) => {
        card.classList.add('animate-fade-up');
        card.style.animationDelay = `${0.9 + (index * 0.15)}s`;
    });

    // Animar cards de formação
    const formacaoCards = document.querySelectorAll('.card-formacao');
    formacaoCards.forEach((card, index) => {
        card.classList.add('animate-fade-up');
        card.style.animationDelay = `${1.1 + (index * 0.15)}s`;
    });

    // Animar cards de experiência
    const experienciaCards = document.querySelectorAll('.card-experiencia');
    experienciaCards.forEach((card, index) => {
        card.classList.add('animate-fade-up');
        card.style.animationDelay = `${1.3 + (index * 0.15)}s`;
    });

    // Animar footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.add('animate-fade-up');
        footer.style.animationDelay = '1.5s';
    }
}

// Executar animações quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay para garantir que DOM está pronto
    setTimeout(animarElementos, 100);
});