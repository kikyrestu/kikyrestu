const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.getElementById('nav-links');

        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        document.addEventListener('mousemove', function(e) {
            const heroImage = document.querySelector('.hero-image img');
            const rect = heroImage.getBoundingClientRect();
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;

            const moveX = (x / window.innerWidth) * 20;
            const moveY = (y / window.innerHeight) * 20;

            heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        document.addEventListener('mouseleave', function() {
            const heroImage = document.querySelector('.hero-image img');
            heroImage.style.transform = 'translate(0, 0)';
        });

        window.onscroll = function() {
            const backToTopButton = document.getElementById('back-to-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        document.getElementById('back-to-top').addEventListener('click', function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        