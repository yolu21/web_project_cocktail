 document.addEventListener('DOMContentLoaded', function () {
            const menuIcon = document.querySelector('.menu-icon i'); 
            const mobileNav = document.querySelector('.mobile-nav'); 
            const closeIcon = document.querySelector('.close-icon'); 

            // click menu icon to show mobile nav
            menuIcon.addEventListener('click', function () {

                menuIcon.classList.add('hidden'); // hide menu icon
                
                setTimeout(() => {
                    mobileNav.style.display = 'block'; 
                    closeIcon.style.display = 'block'; 
                    closeIcon.classList.remove('hidden'); // show close icon
                }, 200);
                 
                menuIcon.style.display = 'none'; 
            });

            // click close icon to hide mobile nav
            closeIcon.addEventListener('click', function () {
                closeIcon.classList.add('hidden');
                closeIcon.style.display = 'none'; 
                mobileNav.style.display = 'none';
                setTimeout(() => {
                    menuIcon.style.display = 'block'; 
                    menuIcon.classList.remove('hidden'); // show menu icon
                }, 200);
                 
            });
            const links = document.querySelectorAll('.mobile-nav a');
            links.forEach(link => {
                link.addEventListener('click', function () {
                    closeIcon.classList.add('hidden');
                closeIcon.style.display = 'none'; 
                mobileNav.style.display = 'none';
                setTimeout(() => {
                    menuIcon.style.display = 'block'; 
                    menuIcon.classList.remove('hidden'); // show menu icon  
                }, 200);
                  
                });
            });
        });