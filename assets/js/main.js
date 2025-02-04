// Main JavaScript File

// Function to load HTML components dynamically
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load all components
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "components/header.html");
    loadComponent("hero", "components/hero.html");
    loadComponent("services", "components/services.html");
    loadComponent("portfolio", "components/portfolio.html");
    loadComponent("testimonials", "components/testimonials.html");
    loadComponent("faq", "components/faq.html");
    loadComponent("footer", "components/footer.html");
});
