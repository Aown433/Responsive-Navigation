// Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');
        const closeBtn = document.querySelector('.close-btn');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = 'hidden';
        });
         closeBtn.addEventListener('click', () => {
            closeMobileNav();
        });

        overlay.addEventListener('click', () => {
            closeMobileNav();
        });

        function closeMobileNav() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
  document.querySelectorAll('.mobile-links a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileNav();
            });
        });