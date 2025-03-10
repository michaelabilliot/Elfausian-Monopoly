document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Sample property data
    const properties = [
        {
            image: 'assets/property1.jpg',
            title: 'Luxury Penthouse Suite',
            description: 'Stunning penthouse with panoramic city views',
            price: '$5,200,000',
            location: 'Downtown Metropolitan'
        },
        {
            image: 'assets/property2.jpg',
            title: 'Waterfront Villa',
            description: 'Exclusive beachfront property with private dock',
            price: '$8,900,000',
            location: 'Coastal Paradise'
        },
        {
            image: 'assets/property3.jpg',
            title: 'Modern Office Complex',
            description: 'State-of-the-art commercial space in prime location',
            price: '$12,500,000',
            location: 'Business District'
        }
    ];

    // Populate property grid
    const propertyGrid = document.querySelector('.property-grid');
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <div class="property-details">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-description">${property.description}</p>
                <div class="property-meta">
                    <span>${property.price}</span>
                    <span>${property.location}</span>
                </div>
            </div>
        `;
        propertyGrid.appendChild(propertyCard);
    });

    // Sample virtual tour data
    const virtualTours = [
        {
            image: 'assets/tour1.jpg',
            title: 'Luxury Residence Tour',
            description: 'Experience the epitome of luxury living'
        },
        {
            image: 'assets/tour2.jpg',
            title: 'Commercial Complex Tour',
            description: 'Explore our premium office spaces'
        }
    ];

    // Populate virtual tours
    const toursContainer = document.querySelector('.tours-container');
    virtualTours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.title}" class="tour-image">
            <div class="tour-overlay">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-description">${tour.description}</p>
            </div>
        `;
        tourCard.addEventListener('click', () => openVirtualTour(tour));
        toursContainer.appendChild(tourCard);
    });

    // Sample market trends data
    const marketTrends = [
        {
            title: 'Property Value Growth',
            data: '+15%',
            description: 'Year-over-year increase in luxury property values'
        },
        {
            title: 'Investment Return Rate',
            data: '12.3%',
            description: 'Average annual return on premium properties'
        },
        {
            title: 'Market Expansion',
            data: '25+',
            description: 'New premium locations added this year'
        }
    ];

    // Populate market trends
    const trendsContainer = document.querySelector('.trends-container');
    marketTrends.forEach(trend => {
        const trendCard = document.createElement('div');
        trendCard.className = 'trend-card';
        trendCard.innerHTML = `
            <h3 class="trend-title">${trend.title}</h3>
            <div class="trend-data">${trend.data}</div>
            <p class="trend-description">${trend.description}</p>
        `;
        trendsContainer.appendChild(trendCard);
    });

    // Virtual tour modal function
    function openVirtualTour(tour) {
        // Implement virtual tour modal functionality
        alert(`Opening virtual tour: ${tour.title}\nThis feature will be implemented with a 3D visualization library.`);
    }
});