/**
 * @param {string} targetId
 */
function navigateTo(targetId) {

    const sections = document.querySelectorAll('.tutorial-card');
    sections.forEach(section => {
        section.classList.remove('active');
    });

  
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
       
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
    updateSidebar(targetId);
}

/**
 * @param {string} activeId 
 */
function updateSidebar(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-target') === activeId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.nav-link');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const target = link.getAttribute('data-target');
            navigateTo(target);
        });
    });
});

function navigateTo(sectionId) {
    
    const sections = document.querySelectorAll('.tutorial-card');
    sections.forEach(section => {
        section.classList.remove('active');
    });

   
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }


    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (sectionId !== 'inicio') {
        const activeLink = document.querySelector(`.nav-link[data-target="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

function finalizarCurso() {
    alert('¡Llegaste al final de los módulos! Para volver a la página principal pulsa "Aceptar".');
    navigateTo('inicio'); 
}