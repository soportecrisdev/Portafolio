// Seleccionar elementos DOM
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Función para el menú móvil
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('fa-times');
    });
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('fa-times');
        }
    });
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'white';
    }
});

// Activar enlace de navegación según la sección visible
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observar elementos de las secciones
    document.querySelectorAll('.section-title, .skill, .project-card, .timeline-item, .contact-form').forEach(el => {
        observer.observe(el);
    });
});

// Validación del formulario de contacto
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('mensaje');
        const honeypotInput = document.getElementById('honeypot');
        
        // Verificar si el campo honeypot está vacío (protección contra bots)
        if (honeypotInput.value !== '') {
            e.preventDefault();
            return false;
        }
        
        // Validar campos
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Por favor ingresa tu nombre');
        } else {
            clearError(nameInput);
        }
        
        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Por favor ingresa tu correo electrónico');
        } else if (!isValidEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, 'Por favor ingresa un correo electrónico válido');
        } else {
            clearError(emailInput);
        }
        
        if (messageInput.value.trim() === '') {
            isValid = false;
            showError(messageInput, 'Por favor ingresa tu mensaje');
        } else {
            clearError(messageInput);
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Funciones auxiliares para validación de formulario
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--error-color)';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.5rem';
    
    // Remover mensajes de error previos
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        formGroup.removeChild(existingError);
    }
    
    formGroup.appendChild(errorDiv);
    input.style.borderColor = 'var(--error-color)';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        formGroup.removeChild(existingError);
    }
    input.style.borderColor = 'var(--border-color)';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}