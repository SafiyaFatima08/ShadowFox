document.addEventListener("DOMContentLoaded", () => {

    // 1. TYPING ANIMATION FIX
    
    let index = 0;
    const typingEl = document.querySelector(".typing");

    function typeEffect() {
        if (typingEl && index < text.length) {
            typingEl.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }
    typeEffect();

    // 2. ABOUT & EDUCATION ANIMATION (Combined & Cleaned)
    const about = document.querySelector(".about");
    const eduCards = document.querySelectorAll(".edu-card");
    const eduIcon = document.querySelector(".edu-heading i");

    const observerOptions = { threshold: 0.2 };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                if (entry.target.classList.contains('about')) {
                    eduCards.forEach((card, i) => {
                        setTimeout(() => card.classList.add("show"), i * 200);
                    });
                }
            }
        });
    }, observerOptions);

    if (about) appearanceObserver.observe(about);
    if (eduIcon) appearanceObserver.observe(eduIcon);

    // 3. SKILL CARDS MOUSE GLOW
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 4. PROJECT CARDS ANIMATION
    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.5s ease-out";
        projectObserver.observe(card);
    });

});
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        
        navLinks.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
    });
});

