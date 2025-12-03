function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Pequeña animación al cargar los artículos
document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".blog-post");
    posts.forEach((post, index) => {
        post.style.opacity = "0";
        post.style.transform = "translateY(20px)";
        post.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        
        setTimeout(() => {
            post.style.opacity = "1";
            post.style.transform = "translateY(0)";
        }, index * 200);
    });
});