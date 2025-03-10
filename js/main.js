// Industry data
const industries = [
    {
        name: 'Music',
        description: 'Revolutionizing the global music industry through innovative platforms and technologies.',
        icon: '🎵'
    },
    {
        name: 'Shopping',
        description: 'Transforming retail with cutting-edge e-commerce solutions and immersive experiences.',
        icon: '🛍️'
    },
    {
        name: 'Flights',
        description: 'Pioneering the future of air travel with sustainable and innovative aviation solutions.',
        icon: '✈️'
    },
    {
        name: 'Construction',
        description: 'Building tomorrow\'s infrastructure with sustainable materials and smart technologies.',
        icon: '🏗️'
    },
    {
        name: 'Technology',
        description: 'Driving digital transformation across industries with cutting-edge solutions.',
        icon: '💻'
    },
    {
        name: 'Finance',
        description: 'Revolutionizing financial services with blockchain and AI-powered solutions.',
        icon: '💰'
    },
    {
        name: 'Entertainment',
        description: 'Creating immersive entertainment experiences through innovative technology.',
        icon: '🎬'
    },
    {
        name: 'Healthcare',
        description: 'Advancing medical care with AI-driven diagnostics and innovative treatments.',
        icon: '🏥'
    },
    {
        name: 'Real Estate',
        description: 'Transforming property development and management with smart technologies.',
        icon: '🏢'
    },
    {
        name: 'Energy',
        description: 'Pioneering sustainable energy solutions for a cleaner future.',
        icon: '⚡'
    },
    {
        name: 'Automotive',
        description: 'Driving the future of mobility with electric and autonomous vehicles.',
        icon: '🚗'
    },
    {
        name: 'Education',
        description: 'Revolutionizing learning through innovative digital platforms and AI.',
        icon: '📚'
    },
    {
        name: 'Hospitality',
        description: 'Creating exceptional guest experiences through innovative service solutions.',
        icon: '🏨'
    }
];

// Innovation spotlight data
const spotlights = [
    {
        title: 'AI-Powered Urban Planning',
        description: 'Revolutionizing city development with machine learning and big data analytics.',
        image: 'images/innovation-1.jpg'
    },
    {
        title: 'Sustainable Energy Grid',
        description: 'Creating the world\'s first AI-managed renewable energy distribution network.',
        image: 'images/innovation-2.jpg'
    },
    {
        title: 'Digital Healthcare Platform',
        description: 'Connecting patients with AI-powered diagnostics and virtual care solutions.',
        image: 'images/innovation-3.jpg'
    }
];

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const gridContainer = document.querySelector('.grid-container');
const spotlightContainer = document.querySelector('.spotlight-container');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.nav-toggle')) {
        navLinks.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Populate Industry Cards
function createIndustryCard(industry) {
    const card = document.createElement('div');
    card.className = 'industry-card';
    card.innerHTML = `
        <div class="industry-icon">${industry.icon}</div>
        <h3>${industry.name}</h3>
        <p>${industry.description}</p>
        <a href="${industry.name.toLowerCase()}.html" class="learn-more" 
           aria-label="Learn more about ${industry.name}">
            Learn More
        </a>
    `;
    return card;
}

function populateIndustries() {
    if (gridContainer) {
        industries.forEach(industry => {
            gridContainer.appendChild(createIndustryCard(industry));
        });
    }
}

// Populate Innovation Spotlights
function createSpotlightCard(spotlight) {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
        <div class="spotlight-image">
            <img src="${spotlight.image}" alt="${spotlight.title}" loading="lazy">
        </div>
        <div class="spotlight-content">
            <h3>${spotlight.title}</h3>
            <p>${spotlight.description}</p>
        </div>
    `;
    return card;
}

function populateSpotlights() {
    if (spotlightContainer) {
        spotlights.forEach(spotlight => {
            spotlightContainer.appendChild(createSpotlightCard(spotlight));
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateIndustries();
    populateSpotlights();
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.industry-card, .spotlight-card').forEach(el => {
    observer.observe(el);
});