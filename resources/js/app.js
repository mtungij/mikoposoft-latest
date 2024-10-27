import './bootstrap';

import '../../vendor/masmerise/livewire-toaster/resources/js'; 
import mask from "@alpinejs/mask";

Alpine.plugin(mask);

document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdown toggle elements
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // Prevent the default action
            event.preventDefault();
            
            // Find the corresponding dropdown menu
            const dropdownMenu = toggle.nextElementSibling; // Assumes the menu is the next sibling

            if (dropdownMenu) {
                // Toggle the visibility of the dropdown menu
                dropdownMenu.classList.toggle('show');

                // Create a Popper instance to manage the dropdown positioning
                createPopper(toggle, dropdownMenu, {
                    placement: 'bottom', // Adjust placement if needed
                });
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('show') && !toggle.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});

