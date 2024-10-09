var menuIcon = document.getElementById('menu-icon');
var hamburgerIcon = document.getElementById('hamburger-icon');
var xIcon = document.getElementById('x-icon');
const collapsibleMenu = document.getElementById('collapsible-menu');
const header = document.querySelector('nav');
var menuLinks = document.querySelectorAll('#collapsible-menu a');


// Toggle function for menu and icons
menuIcon.onclick = function(event) {
    event.stopPropagation();  // Prevent this click from triggering the document click event
    
    const isMenuOpen = collapsibleMenu.style.height !== '0px'; 
    if (isMenuOpen) {
        // Collapse the menu
        collapsibleMenu.style.height = '0px';
        hamburgerIcon.classList.toggle('hidden');
        xIcon.classList.toggle('hidden');
    } else {
        // Expand the menu
        collapsibleMenu.style.height = collapsibleMenu.scrollHeight + 'px';
        hamburgerIcon.classList.toggle('hidden');
        xIcon.classList.toggle('hidden');
    }
};

// Close the menu when clicking outside of the header
document.onclick = function(event) {
    const isClickInside = header.contains(event.target);  // Check if the click is inside the header

    if (!isClickInside) {
        // Collapse the menu if open
        const isMenuOpen = collapsibleMenu.style.height !== '0px';
        if (isMenuOpen) {
            collapsibleMenu.style.height = '0px';
            hamburgerIcon.classList.toggle('hidden');
            xIcon.classList.toggle('hidden');
        }
    }
};

menuLinks.forEach(link => {
    link.onclick = function() {
        const isMenuOpen = collapsibleMenu.style.height !== '0px';
        if (isMenuOpen) {
            collapsibleMenu.style.height = '0px';
            hamburgerIcon.classList.toggle('hidden');
            xIcon.classList.toggle('hidden');
        }
    };
});
