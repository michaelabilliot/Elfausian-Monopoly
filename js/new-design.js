// New Design JavaScript for Elfausian Monopoly Website

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;
    
    // Sound effect for menu toggle
    const menuSound = new Audio('sounds/menu-click.mp3');
    
    // Stock ticker data
    const stockData = [
        { symbol: 'ELF-AUTO', price: '2,456.78', change: '+3.45%', positive: true },
        { symbol: 'ELF-TECH', price: '1,876.23', change: '+5.67%', positive: true },
        { symbol: 'ELF-MEDIA', price: '987.65', change: '-1.23%', positive: false },
        { symbol: 'ELF-ENERGY', price: '3,421.09', change: '+2.78%', positive: true },
        { symbol: 'ELF-HEALTH', price: '1,543.21', change: '+0.89%', positive: true },
        { symbol: 'ELF-RETAIL', price: '876.54', change: '-0.45%', positive: false },
        { symbol: 'ELF-DEFENSE', price: '2,345.67', change: '+4.56%', positive: true },
        { symbol: 'ELF-ESTATE', price: '1,234.56', change: '-2.34%', positive: false },
        { symbol: 'ELF-ENTMT', price: '765.43', change: '+1.23%', positive: true },
        { symbol: 'ELF-GLOBAL', price: '5,678.90', change: '+7.89%', positive: true }
    ];
    
    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        body.classList.toggle('nav-open');
        
        // Play menu sound (with fallback in case sound file isn't available)
        try {
            menuSound.currentTime = 0;
            menuSound.play().catch(e => console.log('Sound playback prevented:', e));
        } catch (error) {
            console.log('Sound playback error:', error);
        }
        
        // Animate hamburger to X
        if (mainNav.classList.contains('active')) {
            navToggle.querySelector('.hamburger').classList.add('active');
        } else {
            navToggle.querySelector('.hamburger').classList.remove('active');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') && 
            !e.target.closest('.main-nav') && 
            !e.target.closest('.nav-toggle')) {
            mainNav.classList.remove('active');
            body.classList.remove('nav-open');
            navToggle.querySelector('.hamburger').classList.remove('active');
        }
    });
    
    // Initialize stock ticker
    function initStockTicker() {
        const tickerContainer = document.querySelector('.ticker-content');
        
        if (tickerContainer) {
            // Clear existing content
            tickerContainer.innerHTML = '';
            
            // Add stock data
            stockData.forEach(stock => {
                const tickerItem = document.createElement('div');
                tickerItem.className = 'ticker-item';
                
                tickerItem.innerHTML = `
                    <span class="ticker-symbol">${stock.symbol}</span>
                    <span class="ticker-price">${stock.price}</span>
                    <span class="ticker-change ${stock.positive ? 'positive' : 'negative'}">${stock.change}</span>
                `;
                
                tickerContainer.appendChild(tickerItem);
            });
            
            // Clone items for seamless looping
            stockData.forEach(stock => {
                const tickerItem = document.createElement('div');
                tickerItem.className = 'ticker-item';
                
                tickerItem.innerHTML = `
                    <span class="ticker-symbol">${stock.symbol}</span>
                    <span class="ticker-price">${stock.price}</span>
                    <span class="ticker-change ${stock.positive ? 'positive' : 'negative'}">${stock.change}</span>
                `;
                
                tickerContainer.appendChild(tickerItem);
            });
        }
    }
    
    // Initialize holographic effects
    function initHolographicEffects() {
        const heroTitle = document.querySelector('.hero-title');
        
        if (heroTitle) {
            // Add 3D rotation effect on mouse move
            document.querySelector('.hero').addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                
                heroTitle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
            
            // Reset on mouse leave
            document.querySelector('.hero').addEventListener('mouseleave', () => {
                heroTitle.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });
        }
    }
    
    // System boot animation
    function playBootAnimation() {
        const bootOverlay = document.createElement('div');
        bootOverlay.className = 'boot-overlay';
        bootOverlay.innerHTML = `
            <div class="boot-content">
                <div class="boot-logo">ELFAUSIAN OS</div>
                <div class="boot-progress">
                    <div class="boot-bar"></div>
                </div>
                <div class="boot-status">INITIALIZING CORPORATE INTERFACE...</div>
            </div>
        `;
        
        document.body.appendChild(bootOverlay);
        
        // Animate boot sequence
        setTimeout(() => {
            bootOverlay.querySelector('.boot-bar').style.width = '100%';
            bootOverlay.querySelector('.boot-status').textContent = 'SYSTEM READY';
        }, 500);
        
        setTimeout(() => {
            bootOverlay.classList.add('fade-out');
        }, 2500);
        
        setTimeout(() => {
            bootOverlay.remove();
        }, 3000);
    }
    
    // Initialize propaganda slogans
    function initPropagandaSlogans() {
        const slogans = [
            "Elfausian: Owning Tomorrow, Today",
            "Your Future, Our Business",
            "One Corporation, Infinite Possibilities",
            "Resistance Is Unprofitable",
            "Efficiency Through Compliance",
            "Your Needs, Our Acquisitions"
        ];
        
        const propagandaSection = document.querySelector('.propaganda-section');
        
        if (propagandaSection) {
            const sloganElement = propagandaSection.querySelector('.propaganda-slogan');
            let currentSlogan = 0;
            
            // Set initial slogan
            sloganElement.textContent = slogans[currentSlogan];
            
            // Change slogan every 5 seconds
            setInterval(() => {
                currentSlogan = (currentSlogan + 1) % slogans.length;
                
                // Fade out
                sloganElement.style.opacity = 0;
                
                // Change text and fade in
                setTimeout(() => {
                    sloganElement.textContent = slogans[currentSlogan];
                    sloganElement.style.opacity = 1;
                }, 500);
            }, 5000);
        }
    }
    
    // Initialize scroll animations
    function initScrollAnimations() {
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
        document.querySelectorAll('.industry-card, .spotlight-card, .propaganda-section').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Initialize all features
    function init() {
        // Add active class to hamburger icon
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        }
        
        // Play boot animation
        playBootAnimation();
        
        // Initialize components
        initStockTicker();
        initHolographicEffects();
        initPropagandaSlogans();
        initScrollAnimations();
    }
    
    // Run initialization
    init();
});

// Hamburger animation styles
document.head.insertAdjacentHTML('beforeend', `
<style>
.hamburger.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

.boot-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
}

.boot-overlay.fade-out {
    opacity: 0;
}

.boot-content {
    text-align: center;
    color: #ffd700;
    font-family: 'Share Tech Mono', monospace;
}

.boot-logo {
    font-size: 3rem;
    margin-bottom: 2rem;
    letter-spacing: 5px;
}

.boot-progress {
    width: 300px;
    height: 10px;
    background-color: #333;
    margin: 0 auto 1rem;
    border: 1px solid #ffd700;
}

.boot-bar {
    height: 100%;
    width: 0;
    background-color: #ffd700;
    transition: width 2s cubic-bezier(0.77, 0, 0.175, 1);
}

.boot-status {
    font-size: 1rem;
    letter-spacing: 2px;
}
</style>
`);