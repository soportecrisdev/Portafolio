// ======================================
// MAIN JAVASCRIPT FILE
// ======================================

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Load projects from JSON
    loadProjects();
    
    // Initialize animations
    initializeAnimations();
});

// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && navMenu) {
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Update active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100; // Offset for header height
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Load projects from JSON file
async function loadProjects() {
    try {
        const response = await fetch('projects/data.json');
        
        if (!response.ok) {
            // If JSON file doesn't exist, create default projects
            createDefaultProjects();
            return;
        }
        
        const projects = await response.json();
        renderProjects(projects);
    } catch (error) {
        console.log('Projects file not found, using default projects');
        createDefaultProjects();
    }
}

// Create default projects if JSON file doesn't exist
function createDefaultProjects() {
    const defaultProjects = [
        {
            titulo: "Aplicación VPN",
            descripcion: "Desarrollo de una aplicación VPN basada en una estructura existente, implementando funcionalidades de conexión segura y gestión de usuarios.",
            imagen: "img/proyecto1.jpg",
            tecnologias: ["Java", "Networking", "Security"],
            demo: "#",
            repositorio: "https://github.com/CristianBatero"
        },
        {
            titulo: "Sistema de Gestión Web",
            descripcion: "Desarrollo de un sistema web para gestión de datos con interfaz intuitiva y funcionalidades CRUD completas.",
            imagen: "img/proyecto2.jpg",
            tecnologias: ["PHP", "MySQL", "JavaScript"],
            demo: "#",
            repositorio: "https://github.com/CristianBatero"
        },
        {
            titulo: "Automatización con Python",
            descripcion: "Scripts de automatización para tareas repetitivas en el área de infraestructura de datos, mejorando la eficiencia operativa.",
            imagen: "img/proyecto3.jpg",
            tecnologias: ["Python", "Automation", "Data Processing"],
            demo: "#",
            repositorio: "https://github.com/CristianBatero"
        }
    ];
    
    renderProjects(defaultProjects);
}

// Render projects to the DOM
function renderProjects(projects) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.imagen}" alt="${project.titulo}" onerror="this.src='img/placeholder-project.jpg'">
            </div>
            <div class="project-info">
                <h3>${project.titulo}</h3>
                <p>${project.descripcion}</p>
                <div class="project-tech">
                    ${project.tecnologias.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                ${project.demo ? `<a href="${project.demo}" class="btn-demo" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Ver Demo
                </a>` : ''}
                ${project.repositorio ? `<a href="${project.repositorio}" class="btn-repo" target="_blank">
                    <i class="fab fa-github"></i> Repositorio
                </a>` : ''}
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Form handling with multiple submission options
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const mensaje = formData.get('mensaje');
        
        // Validation function
        function validarEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        // Comprehensive validation
        const errores = [];
        
        if (!nombre || nombre.trim().length < 2) {
            errores.push('El nombre debe tener al menos 2 caracteres');
        }
        
        if (!email || !validarEmail(email)) {
            errores.push('Por favor ingresa un correo electrónico válido');
        }
        
        if (!mensaje || mensaje.trim().length < 10) {
            errores.push('El mensaje debe tener al menos 10 caracteres');
        }
        
        // Show errors if any
        if (errores.length > 0) {
            mostrarMensaje('error', errores.join('. '));
            return;
        }
        
        // Prepare form submission
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Option 1: EmailJS (recommended for static sites)
        if (typeof emailjs !== 'undefined') {
            enviarConEmailJS(nombre, email, mensaje, submitBtn, originalText, this);
        } 
        // Option 2: Formspree (alternative service)
        else if (this.hasAttribute('data-formspree')) {
            enviarConFormspree(this, submitBtn, originalText);
        }
        // Option 3: Netlify Forms (if hosted on Netlify)
        else if (this.hasAttribute('data-netlify')) {
            enviarConNetlify(this, submitBtn, originalText);
        }
        // Option 4: mailto fallback
        else {
            enviarConMailto(nombre, email, mensaje, submitBtn, originalText, this);
        }
    });
}

// EmailJS implementation
function enviarConEmailJS(nombre, email, mensaje, submitBtn, originalText, form) {
    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';
    
    const templateParams = {
        from_name: nombre,
        from_email: email,
        message: mensaje,
        to_name: 'Cristian Batero'
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function(response) {
            mostrarMensaje('success', '¡Mensaje enviado correctamente! Te contactaré pronto.');
            form.reset();
        }, function(error) {
            mostrarMensaje('error', 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.');
        })
        .finally(function() {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

// Formspree implementation
function enviarConFormspree(form, submitBtn, originalText) {
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            mostrarMensaje('success', '¡Mensaje enviado correctamente! Te contactaré pronto.');
            form.reset();
        } else {
            mostrarMensaje('error', 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.');
        }
    }).catch(function(error) {
        mostrarMensaje('error', 'Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
    }).finally(function() {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

// Netlify Forms implementation
function enviarConNetlify(form, submitBtn, originalText) {
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
    }).then(function(response) {
        if (response.ok) {
            mostrarMensaje('success', '¡Mensaje enviado correctamente! Te contactaré pronto.');
            form.reset();
        } else {
            mostrarMensaje('error', 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.');
        }
    }).catch(function(error) {
        mostrarMensaje('error', 'Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
    }).finally(function() {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

// Mailto fallback
function enviarConMailto(nombre, email, mensaje, submitBtn, originalText, form) {
    const asunto = encodeURIComponent('Mensaje desde tu portafolio');
    const cuerpo = encodeURIComponent(`
Nombre: ${nombre}
Email: ${email}

Mensaje:
${mensaje}
    `);
    
    const mailtoLink = `mailto:cristianbatero18@gmail.com?subject=${asunto}&body=${cuerpo}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        mostrarMensaje('info', 'Se ha abierto tu cliente de correo. Si no se abrió automáticamente, puedes contactarme directamente a cristianbatero18@gmail.com');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Message display function
function mostrarMensaje(tipo, texto) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${tipo}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas ${tipo === 'success' ? 'fa-check-circle' : tipo === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${texto}</span>
            <button type="button" class="close-message" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Insert message before form
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Skill bars animation on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('habilidades');
    
    if (skillsSection && isElementInViewport(skillsSection)) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                
                // Animate skill bars when skills section comes into view
                if (entry.target.id === 'habilidades') {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 300);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.skill, .project-card, .timeline-item, section');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Format date function
    formatDate: function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('es-ES', options);
    },

    // Lazy loading for images
    lazyLoadImages: function() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
};

// Performance optimizations
const optimizedScroll = utils.throttle(function() {
    updateActiveNavLink();
    
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
}, 100);

// Replace the existing scroll event listener
window.removeEventListener('scroll', window.addEventListener);
window.addEventListener('scroll', optimizedScroll);

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.src.includes('proyecto')) {
                this.src = 'img/placeholder-project.jpg';
            } else if (this.src.includes('avatar')) {
                this.src = 'img/placeholder-avatar.png';
            } else {
                this.src = 'img/placeholder.jpg';
            }
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        if (menuToggle && navMenu && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Focus management for accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Initialize focus management
manageFocus();

// Service Worker registration for PWA support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('ServiceWorker registration successful');
        })
        .catch(function(error) {
            console.log('ServiceWorker registration failed');
        });
    });
}

// Analytics event tracking (Google Analytics example)
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
}

// Track form submissions
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function() {
        trackEvent('form_submit', {
            form_name: 'contact_form'
        });
    });
}

// Track external link clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.target === '_blank') {
        trackEvent('external_link_click', {
            link_url: e.target.href,
            link_text: e.target.textContent.trim()
        });
    }
});

// Console message for developers
console.log(`
🚀 Portafolio de Cristian Batero
📧 Contacto: cristianbatero18@gmail.com
🔗 GitHub: https://github.com/CristianBatero
💼 LinkedIn: https://www.linkedin.com/in/cristian-andres-824742361/

¿Interesado en colaborar? ¡Escríbeme!
`);

// Export functions for external use
window.PortfolioApp = {
    updateActiveNavLink,
    mostrarMensaje,
    animateSkillBars,
    loadProjects,
    utils
};