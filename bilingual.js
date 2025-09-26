// English-only display on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set styles for content
    document.querySelectorAll('.bilingual-text').forEach(function(element) {
        element.style.display = 'block';
    });
    
    // Hide all Arabic text elements
    document.querySelectorAll('.ar-text').forEach(function(element) {
        element.style.display = 'none';
    });
    
    // Show all English text elements
    document.querySelectorAll('.en-text').forEach(function(element) {
        element.style.display = 'block';
    });
    
    // Remove language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.remove();
    }
    
    // Remove language toggle button
    const toggleBtn = document.querySelector('.language-toggle-button');
    if (toggleBtn) {
        toggleBtn.style.display = 'none';
    }
    
    // Remove toggle container
    const toggleContainer = document.querySelector('.language-toggle-container');
    if (toggleContainer) {
        toggleContainer.style.display = 'none';
    }
    
    // Set direction to LTR
    document.body.style.direction = 'ltr';
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
});