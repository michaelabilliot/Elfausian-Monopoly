/**
 * Brutalist, Corporate, Dystopian Design System JavaScript
 * Handles interactions and animations for the Elfausian Monopoly website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.querySelector('.hamburger').classList.toggle('active');
            body.classList.toggle('nav-open');
        });
    }
    
    // Stock Ticker Data
    const stockData = [
        { symbol: 'ELFM', price: '2,457.89', change: '+12.34', positive: true },
        { symbol: 'TECH', price: '876.54', change: '-5.67', positive: false },
        { symbol: 'AUTO', price: '345.67', change: '+8.90', positive: true },
        { symbol: 'HLTH', price: '789.12', change: '+23.45', positive: true },
        { symbol: 'ENRG', price: '234.56', change: '-3.21', positive: false },
        { symbol: 'MEDC', price: '567.89', change: '+4.56', positive: true },
        { symbol: 'DFNS', price: '890.12', change: '+7.89', positive: true },
        { symbol: 'RETL', price: '123.45', change: '-2.34', positive: false },
        { symbol: 'GLBL', price: '1,234.56', change: '+9.87', positive: true }
    ];
    
    // Populate Stock Ticker
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        stockData.forEach(stock => {
            const tickerItem = document.createElement('div');
            tickerItem.className = 'ticker-item';
            
            const symbolSpan = document.createElement('span');
            symbolSpan.className = 'ticker-symbol';
            symbolSpan.textContent = stock.symbol;
            
            const priceSpan = document.createElement('span');
            priceSpan.className = 'ticker-price';
            priceSpan.textContent = `$${stock.price}`;
            
            const changeSpan = document.createElement('span');
            changeSpan.className = stock.positive ? 'ticker-change positive' : 'ticker-change negative';
            changeSpan.textContent = stock.change;
            
            tickerItem.appendChild(symbolSpan);
            tickerItem.appendChild(priceSpan);
            tickerItem.appendChild(changeSpan);
            
            tickerContent.appendChild(tickerItem);
        });
    }
    
    // Industries Grid Data
    const industriesData = [
        {
            icon: 'fa-car',
            title: 'Automotive',
            description: 'Revolutionizing transportation with cutting-edge vehicle technology and autonomous systems.',
            link: 'automotive.html'
        },
        {
            icon: 'fa-desktop',
            title: 'Technology',
            description: 'Pioneering the future through cutting-edge innovation and technological breakthroughs.',
            link: 'technology.html'
        },
        {
            icon: 'fa-medkit',
            title: 'Healthcare',
            description: 'Advancing global health solutions through innovative medical technologies and services.',
            link: 'healthcare.html'
        },
        {
            icon: 'fa-film',
            title: 'Media',
            description: 'Shaping global entertainment and media landscapes with revolutionary content platforms.',
            link: 'entertainment.html'
        },
        {
            icon: 'fa-bolt',
            title: 'Energy',
            description: 'Powering the world with sustainable energy solutions and grid optimization technologies.',
            link: 'energy.html'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Defense',
            description: 'Securing nations with advanced defense systems and strategic security solutions.',
            link: 'construction.html'
        }
    ];
    
    // Populate Industries Grid
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        industriesData.forEach(industry => {
            const card = document.createElement('div');
            card.className = 'industry-card';
            
            const icon = document.createElement('div');
            icon.className = 'industry-icon';
            icon.innerHTML = `<i class="fas ${industry.icon}"></i>`;
            
            const title = document.createElement('h3');
            title.textContent = industry.title;
            
            const description = document.createElement('p');
            description.textContent = industry.description;
            
            const link = document.createElement('a');
            link.href = industry.link;
            link.className = 'learn-more';
            link.textContent = 'Access Division';
            
            card.appendChild(icon);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);
            
            gridContainer.appendChild(card);
        });
    }
    
    // Innovation Spotlight Data
    const spotlightData = [
        {
            image: 'https://source.unsplash.com/random/600x400/?technology',
            title: 'Quantum Computing Initiative',
            description: 'Advancing computational capabilities beyond classical limits with our proprietary quantum architecture.'
        },
        {
            image: 'https://source.unsplash.com/random/600x400/?ai',
            title: 'Neural Interface Systems',
            description: 'Bridging human cognition and digital systems with breakthrough brain-computer interface technology.'
        },
        {
            image: 'https://source.unsplash.com/random/600x400/?biotech',
            title: 'Synthetic Biology Platform',
            description: 'Redefining genetic engineering with our industrial-scale DNA synthesis and editing capabilities.'
        }
    ];
    
    // Populate Innovation Spotlight
    const spotlightContainer = document.querySelector('.spotlight-container');
    if (spotlightContainer) {
        spotlightData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            
            const imageDiv = document.createElement('div');
            imageDiv.className = 'spotlight-image';
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'spotlight-content';
            
            const title = document.createElement('h3');
            title.textContent = item.title;
            
            const description = document.createElement('p');
            description.textContent = item.description;
            
            imageDiv.appendChild(img);
            contentDiv.appendChild(title);
            contentDiv.appendChild(description);
            
            card.appendChild(imageDiv);
            card.appendChild(contentDiv);
            
            spotlightContainer.appendChild(card);
        });
    }
    
    // Add glitch effect to certain elements
    const glitchElements = document.querySelectorAll('.hero-title, .propaganda-slogan');
    glitchElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseout', function() {
            this.style.animation = '';
        });
    });
    
    // Add static noise flicker on load for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const staticOverlay = document.createElement('div');
        staticOverlay.className = 'static-overlay';
        hero.appendChild(staticOverlay);
        
        setTimeout(() => {
            staticOverlay.style.opacity = '0';
            setTimeout(() => {
                staticOverlay.remove();
            }, 1000);
        }, 500);
    }
    
    // Add typing effect to propaganda slogan
    const propagandaSlogan = document.querySelector('.propaganda-slogan');
    if (propagandaSlogan) {
        const text = propagandaSlogan.textContent;
        propagandaSlogan.textContent = '';
        propagandaSlogan.style.borderRight = '2px solid var(--secondary-accent)';
        propagandaSlogan.style.whiteSpace = 'nowrap';
        propagandaSlogan.style.overflow = 'hidden';
        propagandaSlogan.style.width = '0';
        propagandaSlogan.style.animation = 'typing 3s steps(40, end) forwards';
        
        setTimeout(() => {
            propagandaSlogan.textContent = text;
        }, 100);
    }
});