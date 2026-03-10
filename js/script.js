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