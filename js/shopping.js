// Static product data
const products = [
    {
        id: 1,
        title: 'Quantum Neural Interface',
        price: 2999.99,
        category: 'Electronics',
        brand: 'TechVantage',
        image: 'assets/products/quantum-interface.jpg',
        description: 'Experience reality like never before with our revolutionary neural interface. Direct brain-computer interaction with quantum processing capabilities.'
    },
    {
        id: 2,
        title: 'Holographic Display Watch',
        price: 799.99,
        category: 'Wearables',
        brand: 'ChronoTech',
        image: 'assets/products/holo-watch.jpg',
        description: 'Premium timepiece with revolutionary holographic display technology. Features gesture controls and augmented reality integration.'
    },
    {
        id: 3,
        title: 'Autonomous Drone Assistant',
        price: 1499.99,
        category: 'Electronics',
        brand: 'AeroLogic',
        image: 'assets/products/drone-assistant.jpg',
        description: 'Personal AI-powered drone companion with advanced photography, security, and assistance features.'
    },
    {
        id: 4,
        title: 'Biometric Smart Suit',
        price: 3499.99,
        category: 'Fashion',
        brand: 'FutureFit',
        image: 'assets/products/smart-suit.jpg',
        description: 'Executive attire with integrated health monitoring, climate control, and adaptive fit technology.'
    },
    {
        id: 5,
        title: 'Molecular Food Synthesizer',
        price: 4999.99,
        category: 'Appliances',
        brand: 'CulinaryTech',
        image: 'assets/products/food-synthesizer.jpg',
        description: 'Create any dish from basic molecular components. Includes AI chef and nutrition optimization.'
    },
    {
        id: 6,
        title: 'Neural Learning Headset',
        price: 899.99,
        category: 'Education',
        brand: 'BrainBoost',
        image: 'assets/products/learning-headset.jpg',
        description: 'Accelerate learning through direct neural stimulation and AI-guided cognitive enhancement.'
    }
];

// Filter options
const categories = [...new Set(products.map(product => product.category))];
const brands = [...new Set(products.map(product => product.brand))];
const priceRanges = [
    { label: 'Under $1000', min: 0, max: 1000 },
    { label: '$1000 - $2000', min: 1000, max: 2000 },
    { label: '$2000 - $3000', min: 2000, max: 3000 },
    { label: '$3000+', min: 3000, max: Infinity }
];

// DOM Elements
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const brandFilter = document.getElementById('brand-filter');
const sortSelect = document.getElementById('sort-products');
const productGrid = document.querySelector('.grid-container');
const modal = document.getElementById('product-modal');

// Populate filter options
function initializeFilters() {
    // Categories
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Price ranges
    priceRanges.forEach(range => {
        const option = document.createElement('option');
        option.value = `${range.min}-${range.max}`;
        option.textContent = range.label;
        priceFilter.appendChild(option);
    });

    // Brands
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Filter and sort products
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;
    const selectedBrand = brandFilter.value;
    const sortBy = sortSelect.value;

    let filtered = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
        
        let priceMatch = true;
        if (selectedPriceRange !== 'all') {
            const [min, max] = selectedPriceRange.split('-').map(Number);
            priceMatch = product.price >= min && product.price < max;
        }

        return categoryMatch && brandMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    displayProducts(filtered);
}

// Display products in grid
function displayProducts(products) {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toLocaleString()}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;

        card.addEventListener('click', () => showProductModal(product));
        productGrid.appendChild(card);
    });
}

// Show product modal
function showProductModal(product) {
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="modal-image">
        <div class="modal-info">
            <h2 class="modal-title">${product.title}</h2>
            <p class="modal-price">$${product.price.toLocaleString()}</p>
            <p class="modal-description">${product.description}</p>
            <div class="modal-actions">
                <button class="buy-now">Buy Now</button>
                <button class="add-to-wishlist">Add to Wishlist</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    displayProducts(products);

    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    brandFilter.addEventListener('change', filterProducts);
    sortSelect.addEventListener('change', filterProducts);

    const modalClose = modal.querySelector('.modal-close');
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});