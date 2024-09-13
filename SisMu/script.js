document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(link.dataset.target);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const homeLink = document.querySelector('nav ul li a[href="#top"]');
        if (homeLink) {
            homeLink.addEventListener('click', (event) => {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' 
                });
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const headerHeight = document.querySelector('header').offsetHeight;

        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            });
        });
    });
