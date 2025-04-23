<?php
// Inicio de sesión para posibles funcionalidades futuras
session_start();

// Cargar datos de proyectos desde JSON
$projectsData = file_get_contents('projects/data.json');
$projects = json_decode($projectsData, true);

// Variables para información personal
$nombre = "Cristian Batero";
$ciudad = "Cali, Colombia";
$carrera = "Ingeniería en Sistemas";
$slogan = "Desarrollador junior con visión de futuro";
$edad = "23";
$email = "cristianbatero18@gmail.com";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $nombre; ?> - Portafolio</title>
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    
    <!-- Estilos CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Font Awesome para íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Animate.css para animaciones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    
    <!-- Typed.js para animación de tipeo -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
</head>
<body>
    <!-- Cabecera -->
    <?php include 'includes/header.php'; ?>
    
    <!-- Sección Hero (Inicio) -->
    <section id="hero" class="hero-section">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="animate__animated animate__fadeInDown"><?php echo $nombre; ?></h1>
                <h2 class="animate__animated animate__fadeInUp"><?php echo $ciudad; ?> | <?php echo $carrera; ?></h2>
                <p class="slogan animate__animated animate__fadeIn"><?php echo $slogan; ?></p>
                
                <div class="typed-container">
                    <span id="typed-strings">
                        <span>Java</span>
                        <span>Python</span>
                        <span>Web</span>
                    </span>
                    <span id="typed" class="typed"></span>
                </div>
                
                <a href="downloads/cv.pdf" class="btn-download animate__animated animate__fadeInUp" download>
                    <i class="fas fa-download"></i> Descargar CV
                </a>
            </div>
            
            <div class="hero-image animate__animated animate__fadeIn">
                <img src="img/avatar.png" alt="<?php echo $nombre; ?>">
            </div>
        </div>
    </section>
    
    <!-- Sección Sobre Mí -->
    <section id="sobre-mi" class="about-section">
        <div class="section-container">
            <h2 class="section-title">Sobre Mí</h2>
            
            <div class="about-content">
                <div class="about-info">
                    <p><strong>Edad:</strong> <?php echo $edad; ?> años</p>
                    <p><strong>Carrera:</strong> <?php echo $carrera; ?></p>
                    <p><strong>Ciudad:</strong> <?php echo $ciudad; ?></p>
                </div>
                
                <div class="about-story">
                    <h3>Sobre mí</h3>
                    <p>
                         ¡Hola! Soy <strong>Cristian Batero</strong>, tengo 23 años y actualmente estoy estudiando
                        <strong>Ingeniería en Sistemas</strong> en 4to semestre. Vivo en Cali, Colombia y me apasiona
                        todo lo relacionado con la tecnología, el desarrollo web y los sistemas de red.
                    </p>

                    <h3>Mi Forma de Aprender</h3>
                    <p>
                        Aunque me considero un <strong>programador junior</strong>, tengo bases sólidas en lenguajes como
                        <strong>Java, Python</strong> y desarrollo de <strong>páginas web</strong>. Muchos de mis conocimientos
                        los he adquirido por cuenta propia, y aunque al principio no fue fácil, hoy en día me siento
                        preparado para asumir nuevos retos en programación.
                     </p>
                    <p>
                        Uno de mis proyectos más significativos fue desarrollar una <strong>aplicación VPN</strong>,
                         basándome en una estructura existente, donde aprendí. Actualmente trabajo en el área de 
                         <strong>Infraestructura de Datos de Internet</strong>,
                        y también he trabajado en <strong>soporte TI</strong>, lo que me ha dado una buena base práctica.
                    </p>
                    <p>
                         Me considero alguien que <strong>aprende rápido</strong>, con capacidad para adaptarse a diferentes
                        tipos de código y llevar ideas hasta convertirlas en proyectos funcionales.
                    </p>
                    
                    <h3>Mi visión como programador</h3>
                    <p>
                    Creo que la programación no solo se trata de escribir código, sino de aprender a
                    <strong>resolver problemas</strong>. Me gusta enfrentarme a desafíos que me reten,
                    me ayuden a crecer y a descubrir cosas nuevas. No tengo miedo de preguntar ni de
                    equivocarme, porque sé que cada error me acerca a ser mejor.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Sección Habilidades -->
    <section id="habilidades" class="skills-section">
        <div class="section-container">
            <h2 class="section-title">Habilidades</h2>
            
            <div class="skills-container">
                <!-- Java -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-java"></i>
                    </div>
                    <h3>Java</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 85%;"></div>
                    </div>
                    <span class="skill-percentage">85%</span>
                </div>
                
                <!-- Python -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-python"></i>
                    </div>
                    <h3>Python</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 70%;"></div>
                    </div>
                    <span class="skill-percentage">70%</span>
                </div>
                
                <!-- HTML -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-html5"></i>
                    </div>
                    <h3>HTML</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 80%;"></div>
                    </div>
                    <span class="skill-percentage">80%</span>
                </div>
                
                <!-- CSS -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <h3>CSS</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 50%;"></div>
                    </div>
                    <span class="skill-percentage">50%</span>
                </div>
                
                <!-- JavaScript -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-js"></i>
                    </div>
                    <h3>JavaScript</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 60%;"></div>
                    </div>
                    <span class="skill-percentage">60%</span>
                </div>
                
                <!-- PHP -->
                <div class="skill">
                    <div class="skill-icon">
                        <i class="fab fa-php"></i>
                    </div>
                    <h3>PHP</h3>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 60%;"></div>
                    </div>
                    <span class="skill-percentage">60%</span>
                </div>
                
                <!-- Puedes agregar más habilidades aquí -->
            </div>
        </div>
    </section>
    
    <!-- Sección Proyectos -->
    <section id="proyectos" class="projects-section">
        <div class="section-container">
            <h2 class="section-title">Proyectos</h2>
            
            <div class="projects-container">
                <?php foreach ($projects as $project): ?>
                <div class="project-card">
                    <div class="project-image">
                        <img src="<?php echo $project['imagen']; ?>" alt="<?php echo $project['titulo']; ?>">
                    </div>
                    
                    <div class="project-info">
                        <h3><?php echo $project['titulo']; ?></h3>
                        <p><?php echo $project['descripcion']; ?></p>
                        
                        <div class="project-tech">
                            <?php foreach ($project['tecnologias'] as $tech): ?>
                            <span class="tech-badge"><?php echo $tech; ?></span>
                            <?php endforeach; ?>
                        </div>
                        
                        <?php if (!empty($project['demo'])): ?>
                        <a href="<?php echo $project['demo']; ?>" class="btn-demo" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Ver Demo
                        </a>
                        <?php endif; ?>
                        
                        <?php if (!empty($project['repositorio'])): ?>
                        <a href="<?php echo $project['repositorio']; ?>" class="btn-repo" target="_blank">
                            <i class="fab fa-github"></i> Repositorio
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <!-- Sección Experiencia -->
    <section id="experiencia" class="experience-section">
        <div class="section-container">
            <h2 class="section-title">Experiencia</h2>
            
            <div class="timeline">
                <!-- Trabajo Actual -->
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>Infraestructura de Datos</h3>
                        <p class="timeline-date">2023 - Presente</p>
                        <p class="timeline-company">Nombre de la Empresa</p>
                        <p class="timeline-description">
                            <!-- Modifica con tu experiencia actual -->
                            Responsable de... [Describe tus responsabilidades y logros]
                        </p>
                    </div>
                </div>
                
                <!-- Trabajo Anterior -->
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>Soporte TI</h3>
                        <p class="timeline-date">2021 - 2023</p>
                        <p class="timeline-company">Nombre de la Empresa</p>
                        <p class="timeline-description">
                            <!-- Modifica con tu experiencia previa -->
                            Encargado de... [Describe tus responsabilidades y logros]
                        </p>
                    </div>
                </div>
                
                <!-- Puedes agregar más experiencias aquí -->
            </div>
        </div>
    </section>
    
    <!-- Sección Contacto -->
    <section id="contacto" class="contact-section">
        <div class="section-container">
            <h2 class="section-title">Contacto</h2>
            
            <div class="contact-content">
                <div class="contact-info">
                    <p>
                        ¿Tienes alguna pregunta o estás interesado en trabajar juntos?
                        No dudes en contactarme utilizando el formulario.
                    </p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span><?php echo $email; ?></span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span><?php echo $ciudad; ?></span>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <form id="contactForm" action="includes/contact.php" method="POST">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Correo</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                        </div>
                        
                        <!-- Campo oculto para protección contra bots -->
                        <input type="hidden" name="honeypot" id="honeypot" value="">
                        
                        <div class="form-group">
                            <button type="submit" class="btn-submit">
                                <i class="fas fa-paper-plane"></i> Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Pie de página -->
    <?php include 'includes/footer.php'; ?>
    
    <!-- Scripts JavaScript -->
    <script src="js/main.js"></script>
    <script src="js/typing.js"></script>
</body>
</html>