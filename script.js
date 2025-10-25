// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Script ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links li a');

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        
        // Toggle hamburger icon between 'bars' and 'times' (X)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    // Add a click event listener to the hamburger menu button
    hamburger.addEventListener('click', toggleMenu);

    // Add click event listeners to each nav link
    // This makes the menu close automatically when a link is clicked
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- Highlight Current Day's Business Hours ---
    const highlightCurrentDayHours = () => {
        // new Date().getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        const today = new Date().getDay(); 
        
        // Select all the list items in the hours list
        const hoursItems = document.querySelectorAll('.hours-list li');

        hoursItems.forEach(item => {
            // Get the 'data-day' attribute (e.g., "1,2,3,4,5")
            const days = item.dataset.day; 
            
            // If the attribute exists and includes today's number, add the highlight class
            if (days && days.split(',').includes(String(today))) {
                item.classList.add('current-day');
            }
        });
    };

    // Call the new function to run it
    highlightCurrentDayHours();

});