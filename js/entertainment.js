document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Featured media content data
    const featuredContent = [
        {
            title: 'The Last Horizon',
            type: 'Feature Film',
            thumbnail: '../assets/media-thumb-1.jpg',
            description: 'A groundbreaking sci-fi epic'
        },
        {
            title: 'Neon Dreams',
            type: 'Original Series',
            thumbnail: '../assets/media-thumb-2.jpg',
            description: 'Award-winning cyberpunk drama'
        },
        {
            title: 'Beyond Reality',
            type: 'Documentary',
            thumbnail: '../assets/media-thumb-3.jpg',
            description: 'Exploring the boundaries of human perception'
        },
        {
            title: 'Digital Frontiers',
            type: 'Tech Show',
            thumbnail: '../assets/media-thumb-4.jpg',
            description: 'The future of digital entertainment'
        }
    ];

    // Populate media grid
    const mediaGrid = document.querySelector('.media-grid');
    
    featuredContent.forEach(content => {
        const mediaCard = document.createElement('div');
        mediaCard.className = 'media-card';
        mediaCard.innerHTML = `
            <div class="media-thumbnail" style="background-image: url(${content.thumbnail})">
                <div class="media-overlay">
                    <span class="media-type">${content.type}</span>
                </div>
            </div>
            <div class="media-info">
                <h3>${content.title}</h3>
                <p>${content.description}</p>
            </div>
        `;
        mediaGrid.appendChild(mediaCard);
    });

    // Interactive content player
    const playerPlaceholder = document.querySelector('.player-placeholder');
    const playerInfo = document.querySelector('.player-info');

    playerPlaceholder.addEventListener('click', () => {
        // Simulate video loading
        playerPlaceholder.innerHTML = '<div class="loading">Loading preview...</div>';
        
        // Simulate delay and show message
        setTimeout(() => {
            playerInfo.innerHTML = `
                <h3>Now Playing: The Last Horizon</h3>
                <p>Experience the groundbreaking visual effects and storytelling in this exclusive behind-the-scenes look at our upcoming sci-fi epic.</p>
                <div class="player-stats">
                    <span>Release: Summer 2024</span>
                    <span>Director: Sarah Chen</span>
                </div>
            `;
        }, 1500);
    });

    // Add hover effects to news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});