// ============================================
// MENÚ TOGGLE MEJORADO
// ============================================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    navLinks.classList.toggle('active');
    
    // Animación del icono hamburguesa
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '✕'; // Cambiar a X cuando está abierto
        menuIcon.style.transform = 'rotate(90deg)';
    } else {
        menuIcon.innerHTML = '☰'; // Volver a hamburguesa
        menuIcon.style.transform = 'rotate(0deg)';
    }
}

// Cerrar menú al hacer click en un enlace (móvil)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navLinksContainer = document.querySelector('.nav-links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
                document.querySelector('.menu-icon').innerHTML = '☰';
                document.querySelector('.menu-icon').style.transform = 'rotate(0deg)';
            }
        });
    });
});

// ============================================
// ANIMACIÓN DE ENTRADA DE ARTÍCULOS
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".blog-post");
    
    // Observador de intersección para animaciones al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });
    
    posts.forEach((post, index) => {
        post.style.opacity = "0";
        post.style.transform = "translateY(30px)";
        post.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(post);
    });
});

// ============================================
// EFECTO PARALLAX EN HERO
// ============================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        hero.style.opacity = 1 - (scrollPosition / 500);
    }
});

// ============================================
// CONTADOR ANIMADO PARA NÚMEROS
// ============================================
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// EFECTO DE ESCRITURA PARA EL HERO
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Iniciar después de un pequeño delay
        setTimeout(typeWriter, 300);
    }
});

// ============================================
// ANIMACIÓN PARA CONTROL-CARDS
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const controlCards = document.querySelectorAll('.control-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0) scale(1)";
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    controlCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px) scale(0.95)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        cardObserver.observe(card);
    });
});

// ============================================
// SCROLL SUAVE PARA NAVEGACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ============================================
// BOTÓN "VOLVER ARRIBA"
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    // Crear el botón
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(scrollTopBtn);
    
    // Estilos del botón (inline porque no queremos modificar el CSS ahora)
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        z-index: 999;
    `;
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Hover effect
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'scale(1.1) translateY(-5px)';
        scrollTopBtn.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'scale(1) translateY(0)';
        scrollTopBtn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });
    
    // Funcionalidad de scroll
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ============================================
// EFECTO DE CURSOR PERSONALIZADO (OPCIONAL)
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #667eea;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.15s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Efecto click
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
        cursor.style.borderWidth = '3px';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderWidth = '2px';
    });
    
    // Efecto hover en links y botones
    const interactiveElements = document.querySelectorAll('a, button, .control-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#764ba2';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#667eea';
        });
    });
});

// ============================================
// LOADING PROGRESS BAR
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 10000;
        transition: width 0.3s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        alert('🎉 ¡Easter Egg desbloqueado! ¡Eres un verdadero gamer de IHC!');
    }
});

// ============================================
// DETECCIÓN DE MODO OSCURO DEL SISTEMA
// ============================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 Modo oscuro detectado en el sistema');
    // Aquí podrías agregar lógica para cambiar a modo oscuro
}

// ============================================
// PERFORMANCE MONITOR (SOLO EN DESARROLLO)
// ============================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c🚀 Página cargada con éxito', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c📊 Tiempo de carga: ' + performance.now().toFixed(2) + 'ms', 'color: #764ba2; font-size: 14px;');
}