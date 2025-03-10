document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initStockTicker();
    initCharts();
    populateMetrics();
    populatePressReleases();
    populateReports();
    populateServices();
});

// Stock ticker simulation
function initStockTicker() {
    const stocks = [
        { symbol: 'ELF', price: '2,458.75', change: '+2.3%' },
        { symbol: 'TECH', price: '876.50', change: '+1.8%' },
        { symbol: 'FIN', price: '345.20', change: '+0.9%' },
        { symbol: 'GLOB', price: '567.30', change: '+1.5%' }
    ];

    const ticker = document.getElementById('stockTicker');
    const tickerContent = stocks.map(stock =>
        `<span class="stock-item">${stock.symbol}: $${stock.price} <span class="change positive">${stock.change}</span></span>`
    ).join(' | ');

    ticker.innerHTML = tickerContent + ' | ' + tickerContent; // Duplicate for seamless loop
}

// Charts initialization
function initCharts() {
    // Revenue Growth Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Annual Revenue (Billions)',
                data: [45, 52, 65, 82, 98],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Growth'
                }
            }
        }
    });

    // Market Share Chart
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['FinTech', 'Traditional Banking', 'Digital Payments', 'Other'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: [
                    'rgb(75, 192, 192)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Market Share Distribution'
                }
            }
        }
    });
}

// Populate financial metrics
function populateMetrics() {
    const metrics = [
        { label: 'Market Cap', value: '$245B' },
        { label: 'Revenue Growth', value: '+19.5%' },
        { label: 'Active Users', value: '85M' },
        { label: 'Global Presence', value: '120+ Countries' }
    ];

    const container = document.querySelector('.metrics-container');
    metrics.forEach(metric => {
        const card = document.createElement('div');
        card.className = 'metric-card';
        card.innerHTML = `
            <h4>${metric.label}</h4>
            <p class="metric-value">${metric.value}</p>
        `;
        container.appendChild(card);
    });
}

// Populate press releases
function populatePressReleases() {
    const pressReleases = [
        {
            date: '2024-01-15',
            title: 'Elfausian Finance Reports Record Q4 Growth',
            excerpt: 'Company exceeds market expectations with 25% YoY growth...'
        },
        {
            date: '2024-01-02',
            title: 'New AI-Powered Trading Platform Launch',
            excerpt: 'Revolutionary platform leverages advanced machine learning...'
        },
        {
            date: '2023-12-20',
            title: 'Global Expansion into Asian Markets',
            excerpt: 'Strategic partnership with leading Asian financial institutions...'
        }
    ];

    const container = document.querySelector('.press-releases');
    pressReleases.forEach(release => {
        const article = document.createElement('article');
        article.className = 'press-release';
        article.innerHTML = `
            <time datetime="${release.date}">${new Date(release.date).toLocaleDateString()}</time>
            <h3>${release.title}</h3>
            <p>${release.excerpt}</p>
            <a href="#" class="cta-button">Read More</a>
        `;
        container.appendChild(article);
    });
}

// Populate financial reports
function populateReports() {
    const reports = [
        {
            title: 'Annual Report 2023',
            type: 'PDF',
            size: '5.2 MB'
        },
        {
            title: 'Q4 2023 Earnings',
            type: 'PDF',
            size: '2.8 MB'
        },
        {
            title: 'ESG Report 2023',
            type: 'PDF',
            size: '3.5 MB'
        }
    ];

    const container = document.querySelector('.reports-grid');
    reports.forEach(report => {
        const card = document.createElement('div');
        card.className = 'report-card';
        card.innerHTML = `
            <h4>${report.title}</h4>
            <p>${report.type} - ${report.size}</p>
            <a href="#" class="cta-button">Download</a>
        `;
        container.appendChild(card);
    });
}

// Populate services
function populateServices() {
    const services = [
        {
            title: 'Digital Banking',
            description: 'Next-generation banking platform with AI-powered insights and seamless transactions.'
        },
        {
            title: 'Investment Management',
            description: 'Advanced portfolio management with real-time market analysis and automated trading.'
        },
        {
            title: 'Corporate Finance',
            description: 'Comprehensive financial solutions for businesses, from startup to enterprise level.'
        },
        {
            title: 'Blockchain Solutions',
            description: 'Innovative blockchain-based financial products and decentralized finance services.'
        }
    ];

    const container = document.querySelector('.services-grid');
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="#" class="cta-button">Learn More</a>
        `;
        container.appendChild(card);
    });
}