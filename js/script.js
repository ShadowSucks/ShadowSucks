// Mobile menu functionality [[1]][[2]]
document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
