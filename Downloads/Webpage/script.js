// Wait for the entire HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the button element by its ID
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    
    // Select the body element to apply the dark mode class
    const bodyElement = document.body;

    // Check if the button exists on the page
    if (themeToggleButton) {
        
        // Add a click event listener to the button
        themeToggleButton.addEventListener('click', () => {
            
            // Toggle the 'dark-mode' class on the body element.
            // If the class is there, it's removed. If it's not, it's added.
            bodyElement.classList.toggle('dark-mode');

            // Check if the body now has the 'dark-mode' class
            if (bodyElement.classList.contains('dark-mode')) {
                // If it's dark mode, change the button text
                themeToggleButton.textContent = 'Enable Light Mode';
            } else {
                // If it's not dark mode (i.e., light mode), change it back
                themeToggleButton.textContent = 'Enable Dark Mode';
            }
        });
    }
});