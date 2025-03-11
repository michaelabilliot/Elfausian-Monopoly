/**
 * Navigation Standardizer
 * This script ensures consistent navigation order across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
    standardizeNavigation();
});

function standardizeNavigation() {
    // Define the standard order for navigation links
    const standardOrder = [
        'automotive.html',
        'hub.html',
        'technology.html',
        'healthcare.html',
        'entertainment.html',
        'energy.html',
        'construction.html',
        'shopping.html',
        'music.html',
        'realestate.html',
        'education.html',
        'hospitality.html',
        'flights.html',
        'finance.html',
        'about.html',
        'contact.html'
    ];

    // Get the navigation links container
    const navLinks = document.querySelector('.nav-links');
    
    if (!navLinks) return;
    
    // Get all navigation link items
    const navItems = Array.from(navLinks.querySelectorAll('li'));
    
    // Create a map to store items by their href
    const navMap = {};
    
    // Populate the map
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            navMap[href] = item;
        }
    });
    
    // Clear the navigation container
    navLinks.innerHTML = '';
    
    // Add items back in the standard order
    standardOrder.forEach(href => {
        if (navMap[href]) {
            navLinks.appendChild(navMap[href]);
        }
    });
    
    // Add any remaining items that weren't in the standard order
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            if (!standardOrder.includes(href) && !navLinks.contains(item)) {
                navLinks.appendChild(item);
            }
        }
    });
}