document.addEventListener('DOMContentLoaded', () => {
    // Initialize featured destinations
    initFeaturedDestinations();
    // Initialize interactive map
    initInteractiveMap();
});

function initFeaturedDestinations() {
    const destinations = [
        {
            name: 'Tokyo',
            image: '../assets/images/destinations/tokyo.jpg',
            description: 'Experience the blend of tradition and future in Japan\'s capital',
            flightTime: '14h 30m',
            price: '¥250,000'
        },
        {
            name: 'Dubai',
            image: '../assets/images/destinations/dubai.jpg',
            description: 'Discover luxury and innovation in the heart of the UAE',
            flightTime: '7h 15m',
            price: 'AED 3,500'
        },
        {
            name: 'New York',
            image: '../assets/images/destinations/newyork.jpg',
            description: 'The city that never sleeps awaits your arrival',
            flightTime: '8h 45m',
            price: '$1,200'
        },
        {
            name: 'Singapore',
            image: '../assets/images/destinations/singapore.jpg',
            description: 'Your gateway to Southeast Asia\'s tech hub',
            flightTime: '12h 20m',
            price: 'SGD 1,800'
        }
    ];

    const destinationsGrid = document.querySelector('.destinations-grid');
    
    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-image" style="background-image: url(${destination.image})">
                <div class="destination-overlay"></div>
            </div>
            <div class="destination-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-details">
                    <span class="flight-time">Flight Time: ${destination.flightTime}</span>
                    <span class="price">From ${destination.price}</span>
                </div>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });
}

function initInteractiveMap() {
    const mapPoints = [
        { x: 35, y: 45, city: 'London', connections: ['Dubai', 'New York'] },
        { x: 75, y: 40, city: 'Dubai', connections: ['Singapore', 'London'] },
        { x: 85, y: 35, city: 'Singapore', connections: ['Tokyo', 'Dubai'] },
        { x: 90, y: 30, city: 'Tokyo', connections: ['Singapore', 'Los Angeles'] },
        { x: 20, y: 40, city: 'New York', connections: ['London', 'Los Angeles'] },
        { x: 15, y: 35, city: 'Los Angeles', connections: ['Tokyo', 'New York'] }
    ];

    const mapOverlay = document.querySelector('.map-overlay');
    
    mapPoints.forEach(point => {
        const cityPoint = document.createElement('div');
        cityPoint.className = 'map-point';
        cityPoint.style.left = `${point.x}%`;
        cityPoint.style.top = `${point.y}%`;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = point.city;
        
        cityPoint.appendChild(tooltip);
        mapOverlay.appendChild(cityPoint);

        // Add hover effect
        cityPoint.addEventListener('mouseenter', () => {
            cityPoint.classList.add('active');
            // Highlight connections
            point.connections.forEach(connectedCity => {
                const connectedPoint = mapOverlay.querySelector(
                    `.map-point:has(.map-tooltip:contains('${connectedCity}'))`
                );
                if (connectedPoint) {
                    connectedPoint.classList.add('connected');
                }
            });
        });

        cityPoint.addEventListener('mouseleave', () => {
            cityPoint.classList.remove('active');
            mapOverlay.querySelectorAll('.map-point.connected')
                .forEach(point => point.classList.remove('connected'));
        });
    });
}

// Add styles for map points and tooltips
const style = document.createElement('style');
style.textContent = `
    .map-point {
        position: absolute;
        width: 12px;
        height: 12px;
        background: var(--color-accent);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .map-point::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--color-accent);
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    .map-point.active {
        transform: translate(-50%, -50%) scale(1.5);
    }

    .map-point.connected {
        background: var(--color-white);
    }

    .map-tooltip {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        background: var(--color-background-dark);
        color: var(--color-white);
        border-radius: 4px;
        font-size: 0.875rem;
        white-space: nowrap;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
    }

    .map-point:hover .map-tooltip {
        opacity: 1;
        transform: translateX(-50%) translateY(-8px);
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.8;
        }
        100% {
            transform: scale(2.5);
            opacity: 0;
        }
    }
`;

document.head.appendChild(style);