// Simplified JavaScript for no-scroll landing page
document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle for very small screens
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navList = document.querySelector('.nav-list');
        
        // Only create mobile menu if screen is very small
        if (window.innerWidth <= 480) {
            // Create mobile menu button
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                padding: 5px;
                color: #666;
            `;

            // Insert mobile menu button before nav
            nav.parentNode.insertBefore(mobileMenuBtn, nav);

            // Hide nav initially
            nav.style.display = 'none';

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', function() {
                if (nav.style.display === 'none') {
                    nav.style.display = 'block';
                    nav.style.cssText = `
                        display: block;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        padding: 15px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        z-index: 100;
                    `;
                } else {
                    nav.style.display = 'none';
                }
            });

            // Close mobile menu when clicking on a link
            navList.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    nav.style.display = 'none';
                }
            });
        }
    };

    // Initialize mobile menu
    createMobileMenu();

    // Handle window resize
    window.addEventListener('resize', function() {
        const nav = document.querySelector('.nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth > 480) {
            // Show nav and remove mobile menu button
            if (nav) nav.style.display = '';
            if (mobileMenuBtn) mobileMenuBtn.remove();
        } else {
            // Recreate mobile menu for small screens
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileMenu();
            }
        }
    });

    // Add subtle hover effects
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation
    const addLoadingAnimation = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .page-container {
                animation: fadeIn 0.6s ease-out;
            }
        `;
        document.head.appendChild(style);
    };

    addLoadingAnimation();
});