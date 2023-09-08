window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Adjust this value to control when the navbar appears
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});
