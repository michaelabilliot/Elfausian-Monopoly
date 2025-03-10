// Sample blog data (simulating a static JSON file)
const blogData = {
    articles: [
        {
            id: 1,
            title: "Elfausian Technology Division Unveils Revolutionary Quantum Computing Platform",
            excerpt: "Breaking new ground in quantum computing with our proprietary architecture that achieves unprecedented qubit stability.",
            category: "Technology",
            date: "2024-03-15",
            author: "Dr. Elena Quantum",
            image: "images/quantum-computer.jpg",
            content: `Our Technology Division has achieved a major breakthrough in quantum computing...
                     The new platform demonstrates remarkable coherence times exceeding previous records...
                     This advancement positions Elfausian at the forefront of the quantum revolution...`
        },
        {
            id: 2,
            title: "Elfausian Airlines Announces Zero-Emission Aircraft Fleet",
            excerpt: "Revolutionary hydrogen-powered aircraft to transform the aviation industry with zero carbon emissions.",
            category: "Aviation",
            date: "2024-03-10",
            author: "James Skywalker",
            image: "images/hydrogen-aircraft.jpg",
            content: `In a groundbreaking announcement, Elfausian Airlines revealed its plan...
                     The new aircraft fleet will be powered entirely by renewable hydrogen...
                     This initiative marks a historic milestone in sustainable aviation...`
        },
        {
            id: 3,
            title: "Elfausian Finance Launches Global Digital Currency",
            excerpt: "New digital currency system promises to revolutionize international transactions.",
            category: "Finance",
            date: "2024-03-05",
            author: "Sarah Goldman",
            image: "images/digital-currency.jpg",
            content: `Elfausian Finance has introduced a revolutionary digital currency platform...
                     The system utilizes advanced blockchain technology for secure transactions...
                     This innovation will reshape the future of global finance...`
        }
        // Add more articles as needed
    ]
};

// DOM Elements
const searchInput = document.getElementById('blog-search');
const gridContainer = document.querySelector('.grid-container');
const articleModal = document.querySelector('.article-modal');
const filterToggles = document.querySelectorAll('.filter-toggle');
const filterDropdowns = document.querySelectorAll('.filter-dropdown');

// State management
let currentFilters = {
    category: null,
    date: null,
    search: ''
};

// Initialize the blog page
function initializeBlog() {
    renderArticles(blogData.articles);
    setupEventListeners();
    populateFilters();
}

// Render articles in the grid
function renderArticles(articles) {
    gridContainer.innerHTML = articles.map(article => `
        <article class="article-card" data-article-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span>${article.author}</span>
                    <span>${formatDate(article.date)}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    // Article card clicks
    gridContainer.addEventListener('click', handleArticleClick);

    // Filter toggles
    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', handleFilterToggle);
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', handleOutsideClick);
}

// Populate filter dropdowns
function populateFilters() {
    const categories = [...new Set(blogData.articles.map(article => article.category))];
    const categoryFilters = document.getElementById('category-filters');
    
    categoryFilters.innerHTML = categories.map(category => `
        <button class="filter-option" data-category="${category}">${category}</button>
    `).join('');

    // Add event listeners to filter options
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', handleFilterSelect);
    });
}

// Handle article click
function handleArticleClick(event) {
    const articleCard = event.target.closest('.article-card');
    if (!articleCard) return;

    const articleId = parseInt(articleCard.dataset.articleId);
    const article = blogData.articles.find(a => a.id === articleId);
    
    if (article) {
        showArticleModal(article);
    }
}

// Show article modal
function showArticleModal(article) {
    articleModal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Close article">&times;</button>
            <img src="${article.image}" alt="${article.title}" class="modal-image">
            <div class="modal-body">
                <h2 class="modal-title">${article.title}</h2>
                <div class="modal-meta">
                    <span>${article.author}</span>
                    <span>${formatDate(article.date)}</span>
                    <span>${article.category}</span>
                </div>
                <div class="modal-text">
                    ${formatContent(article.content)}
                </div>
                <div class="social-share">
                    <button class="share-button" data-platform="twitter">Share on Twitter</button>
                    <button class="share-button" data-platform="linkedin">Share on LinkedIn</button>
                    <button class="share-button" data-platform="facebook">Share on Facebook</button>
                </div>
            </div>
        </div>
    `;

    articleModal.hidden = false;
    document.body.style.overflow = 'hidden';

    // Add close button listener
    const closeButton = articleModal.querySelector('.modal-close');
    closeButton.addEventListener('click', closeArticleModal);

    // Add share button listeners
    const shareButtons = articleModal.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', handleShare);
    });
}

// Close article modal
function closeArticleModal() {
    articleModal.hidden = true;
    document.body.style.overflow = '';
}

// Handle filter toggle
function handleFilterToggle(event) {
    const toggle = event.currentTarget;
    const dropdownId = toggle.getAttribute('aria-controls');
    const dropdown = document.getElementById(dropdownId);
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    // Close all other dropdowns
    filterDropdowns.forEach(d => {
        if (d.id !== dropdownId) {
            d.hidden = true;
            d.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
    });

    toggle.setAttribute('aria-expanded', !isExpanded);
    dropdown.hidden = isExpanded;
}

// Handle filter selection
function handleFilterSelect(event) {
    const option = event.currentTarget;
    const category = option.dataset.category;
    
    currentFilters.category = category;
    applyFilters();

    // Close dropdown
    const dropdown = option.closest('.filter-dropdown');
    dropdown.hidden = true;
    dropdown.previousElementSibling.setAttribute('aria-expanded', 'false');
}

// Handle search input
function handleSearch(event) {
    currentFilters.search = event.target.value.toLowerCase();
    applyFilters();
}

// Apply filters to articles
function applyFilters() {
    let filteredArticles = blogData.articles;

    // Apply category filter
    if (currentFilters.category) {
        filteredArticles = filteredArticles.filter(article => 
            article.category === currentFilters.category
        );
    }

    // Apply search filter
    if (currentFilters.search) {
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(currentFilters.search) ||
            article.excerpt.toLowerCase().includes(currentFilters.search) ||
            article.content.toLowerCase().includes(currentFilters.search)
        );
    }

    renderArticles(filteredArticles);
}

// Handle sharing
function handleShare(event) {
    const platform = event.currentTarget.dataset.platform;
    const article = getCurrentArticle();
    const shareUrl = window.location.href;
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
}

// Handle clicks outside dropdowns
function handleOutsideClick(event) {
    if (!event.target.closest('.filter-group')) {
        filterDropdowns.forEach(dropdown => {
            dropdown.hidden = true;
            dropdown.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
    }
}

// Utility functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatContent(content) {
    return content.split('...').map(paragraph => 
        `<p>${paragraph.trim()}</p>`
    ).join('');
}

function getCurrentArticle() {
    const modalTitle = document.querySelector('.modal-title');
    return blogData.articles.find(article => article.title === modalTitle.textContent);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the blog when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeBlog);