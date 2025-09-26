// English-only display
document.addEventListener('DOMContentLoaded', function() {
    // Find all bilingual-text elements
    const bilingualElements = document.querySelectorAll('.bilingual-text');
    
    // Set up layout for each bilingual element
    bilingualElements.forEach(element => {
        element.style.display = 'block';
        
        // Get English and Arabic text elements
        const enText = element.querySelector('.en-text');
        const arText = element.querySelector('.ar-text');
        
        if (enText) {
            // Show English only
            enText.style.display = 'block';
        }
        
        if (arText) {
            // Hide Arabic
            arText.style.display = 'none';
        }
    });
    
    // Hide all language toggle elements
    const toggleContainer = document.querySelector('.language-toggle-container');
    if (toggleContainer) {
        toggleContainer.style.display = 'none';
    }
    
    const langToggleContainer = document.querySelector('.lang-toggle-container');
    if (langToggleContainer) {
        langToggleContainer.style.display = 'none';
    }
    
    // Set text direction to LTR
    document.body.style.direction = 'ltr';
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
});