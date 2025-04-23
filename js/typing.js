// Inicializar Typed.js para la animación de tipeo
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('typed')) {
        const typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});