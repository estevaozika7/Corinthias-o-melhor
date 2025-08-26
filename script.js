// Rolar suavemente entre as seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botão "Voltar ao topo"
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Topo';
backToTop.setAttribute('aria-label', 'Voltar ao topo');
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px';
backToTop.style.display = 'none';
backToTop.style.background = '#fff';
backToTop.style.color = '#000';
backToTop.style.border = 'none';
backToTop.style.cursor = 'pointer';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Foco automático no formulário ao abrir a seção de contato
const contatoLink = document.querySelector('a[href="#contato"]');
contatoLink?.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('nome')?.focus();
    }, 500);
});
