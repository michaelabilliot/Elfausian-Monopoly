// Brutalist Design JavaScript for Elfausian Automotive

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Navigation Toggle
    initNavToggle();
    
    // Initialize Vehicle Showcase
    initVehicleShowcase();
    
    // Initialize Car Configurator
    initCarConfigurator();
    
    // Initialize Parallax Effects
    initParallaxEffects();
    
    // Add Glitch Effects
    addGlitchEffects();
});

// Navigation Toggle Function
function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Vehicle Showcase Initialization
function initVehicleShowcase() {
    const showcaseContainer = document.querySelector('.showcase-carousel');
    
    // Vehicle data
    const vehicles = [
        {
            name: 'PHANTOM X',
            image: 'https://placehold.co/600x400/1f1e1e/ed9466?text=PHANTOM+X',
            specs: 'Electric | 0-60 in 2.3s | 620 mi range',
            price: '$142,000'
        },
        {
            name: 'NEXUS GT',
            image: 'https://placehold.co/600x400/1f1e1e/ed9466?text=NEXUS+GT',
            specs: 'Hybrid | 0-60 in 3.1s | 520 mi range',
            price: '$118,500'
        },
        {
            name: 'DOMINION SUV',
            image: 'https://placehold.co/600x400/1f1e1e/ed9466?text=DOMINION+SUV',
            specs: 'Electric | 0-60 in 3.8s | 580 mi range',
            price: '$97,000'
        },
        {
            name: 'VECTOR SEDAN',
            image: 'https://placehold.co/600x400/1f1e1e/ed9466?text=VECTOR+SEDAN',
            specs: 'Electric | 0-60 in 4.2s | 610 mi range',
            price: '$89,500'
        }
    ];
    
    // Create vehicle cards
    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        card.innerHTML = `
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
            </div>
            <div class="vehicle-details">
                <h3>${vehicle.name}</h3>
                <p class="vehicle-specs">${vehicle.specs}</p>
                <p class="vehicle-price">${vehicle.price}</p>
                <button class="view-details-btn">VIEW DETAILS</button>
            </div>
        `;
        
        showcaseContainer.appendChild(card);
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

// Car Configurator Initialization
function initCarConfigurator() {
    const colorOptions = document.querySelector('.color-options');
    const wheelOptions = document.querySelector('.wheel-options');
    const interiorOptions = document.querySelector('.interior-options');
    const techOptions = document.querySelector('.tech-options');
    const previewContainer = document.querySelector('.configurator-preview');
    
    // Set initial preview
    previewContainer.innerHTML = `
        <img src="https://placehold.co/800x400/1f1e1e/ed9466?text=PHANTOM+X" alt="Vehicle Preview" class="preview-image">
        <div class="preview-specs">
            <div class="spec-item"><span>MODEL:</span> PHANTOM X</div>
            <div class="spec-item"><span>COLOR:</span> OBSIDIAN BLACK</div>
            <div class="spec-item"><span>WHEELS:</span> TURBINE 21"</div>
            <div class="spec-item"><span>INTERIOR:</span> EXECUTIVE BLACK</div>
            <div class="spec-item"><span>TECH:</span> AUTOPILOT</div>
        </div>
    `;
    
    // Color options
    const colors = [
        { name: 'OBSIDIAN BLACK', code: '#1f1e1e' },
        { name: 'TITANIUM SILVER', code: '#a3a3a3' },
        { name: 'BRONZE FUSION', code: '#ed9466' },
        { name: 'CARBON GRAY', code: '#3a3a3a' }
    ];
    
    colors.forEach(color => {
        const option = document.createElement('div');
        option.className = 'color-option';
        option.style.backgroundColor = color.code;
        option.setAttribute('data-color', color.name);
        option.innerHTML = `<span class="option-tooltip">${color.name}</span>`;
        
        colorOptions.appendChild(option);
        
        // Add selection functionality
        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            updatePreviewSpec('COLOR', color.name);
        });
    });
    
    // Wheel options
    const wheels = ['TURBINE 21"', 'VORTEX 22"', 'QUANTUM 20"', 'STEALTH 19"'];
    
    wheels.forEach(wheel => {
        const option = document.createElement('div');
        option.className = 'wheel-option';
        option.setAttribute('data-wheel', wheel);
        option.innerHTML = `
            <div class="wheel-icon"></div>
            <span class="wheel-name">${wheel}</span>
        `;
        
        wheelOptions.appendChild(option);
        
        // Add selection functionality
        option.addEventListener('click', function() {
            document.querySelectorAll('.wheel-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            updatePreviewSpec('WHEELS', wheel);
        });
    });
    
    // Interior options
    const interiors = ['EXECUTIVE BLACK', 'CARBON FIBER', 'BRONZE ACCENT', 'MINIMALIST WHITE'];
    
    interiors.forEach(interior => {
        const option = document.createElement('div');
        option.className = 'interior-option';
        option.setAttribute('data-interior', interior);
        option.innerHTML = `
            <div class="interior-icon"></div>
            <span class="interior-name">${interior}</span>
        `;
        
        interiorOptions.appendChild(option);
        
        // Add selection functionality
        option.addEventListener('click', function() {
            document.querySelectorAll('.interior-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            updatePreviewSpec('INTERIOR', interior);
        });
    });
    
    // Tech options
    const techs = ['AUTOPILOT', 'NEURAL LINK', 'QUANTUM COMPUTING', 'HOLOGRAPHIC HUD'];
    
    techs.forEach(tech => {
        const option = document.createElement('div');
        option.className = 'tech-option';
        option.setAttribute('data-tech', tech);
        option.innerHTML = `
            <div class="tech-icon"></div>
            <span class="tech-name">${tech}</span>
        `;
        
        techOptions.appendChild(option);
        
        // Add selection functionality
        option.addEventListener('click', function() {
            document.querySelectorAll('.tech-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            updatePreviewSpec('TECH', tech);
        });
    });
    
    // Set initial selections
    document.querySelector('[data-color="OBSIDIAN BLACK"]').classList.add('selected');
    document.querySelector('[data-wheel="TURBINE 21\\""]').classList.add('selected');
    document.querySelector('[data-interior="EXECUTIVE BLACK"]').classList.add('selected');
    document.querySelector('[data-tech="AUTOPILOT"]').classList.add('selected');
}

// Update preview specs
function updatePreviewSpec(type, value) {
    const specItem = document.querySelector(`.spec-item:has(span:contains(${type}))`); // Note: This selector might not work in all browsers
    if (specItem) {
        specItem.innerHTML = `<span>${type}:</span> ${value}`;
    }
}

// Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.automotive-hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        if (scrollPosition <= heroHeight) {
            // Parallax effect for hero section
            const translateY = scrollPosition * 0.4;
            hero.style.backgroundPositionY = `-${translateY}px`;
            
            // Move hero content in opposite direction
            const heroContent = hero.querySelector('.hero-content');
            heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    });
}

// Add Glitch Effects
function addGlitchEffects() {
    const heroTitle = document.querySelector('.hero-title');
    
    // Add glitch class
    heroTitle.classList.add('glitch');
    
    // Create data-text attribute for glitch effect
    heroTitle.setAttribute('data-text', heroTitle.textContent);
    
    // Add random glitch triggers
    setInterval(() => {
        heroTitle.classList.add('glitch-trigger');
        setTimeout(() => {
            heroTitle.classList.remove('glitch-trigger');
        }, 200);
    }, 5000);
}