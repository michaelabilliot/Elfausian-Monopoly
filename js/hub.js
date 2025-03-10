document.addEventListener('DOMContentLoaded', () => {
    // Initialize all charts
    initializeCharts();
    // Initialize sector navigation
    initializeSectorNav();
    // Add event listeners for interactive widgets
    initializeWidgetControls();
});

function initializeCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue (Billions)',
                data: [135.2, 142.6, 149.3, 157.8],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Market Cap Chart
    const marketCapCtx = document.getElementById('marketCapChart').getContext('2d');
    new Chart(marketCapCtx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Market Cap (Billions)',
                data: [821.5, 845.2, 867.8, 892.4],
                borderColor: 'rgb(153, 102, 255)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Employee Growth Chart
    const employeeCtx = document.getElementById('employeeChart').getContext('2d');
    new Chart(employeeCtx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Employees (Thousands)',
                data: [198.4, 215.6, 235.7, 247.9],
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Innovation Index Chart
    const innovationCtx = document.getElementById('innovationChart').getContext('2d');
    new Chart(innovationCtx, {
        type: 'radar',
        data: {
            labels: ['R&D', 'Patents', 'Tech Adoption', 'Market Impact', 'Sustainability'],
            datasets: [{
                label: 'Innovation Metrics',
                data: [95, 92, 96, 94, 93],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(153, 102, 255)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Sector Performance Chart
    const sectorCtx = document.getElementById('sectorPerformanceChart').getContext('2d');
    new Chart(sectorCtx, {
        type: 'bar',
        data: {
            labels: ['Music', 'Shopping', 'Flights', 'Construction', 'Technology', 'Finance'],
            datasets: [{
                label: 'Revenue Growth (%)',
                data: [15.2, 18.7, 12.4, 9.8, 22.3, 16.5],
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y'
        }
    });

    // Initialize Analysis Tool Charts
    initializeAnalysisCharts();
}

function initializeSectorNav() {
    const sectors = [
        { name: 'Music', growth: '+15.2%' },
        { name: 'Shopping', growth: '+18.7%' },
        { name: 'Flights', growth: '+12.4%' },
        { name: 'Construction', growth: '+9.8%' },
        { name: 'Technology', growth: '+22.3%' },
        { name: 'Finance', growth: '+16.5%' },
        { name: 'Entertainment', growth: '+14.2%' },
        { name: 'Healthcare', growth: '+11.9%' },
        { name: 'Real Estate', growth: '+8.6%' },
        { name: 'Energy', growth: '+13.7%' },
        { name: 'Automotive', growth: '+10.4%' },
        { name: 'Education', growth: '+7.8%' },
        { name: 'Hospitality', growth: '+9.3%' }
    ];

    const sectorNav = document.querySelector('.sector-nav');
    const sectorList = document.createElement('ul');
    sectorList.className = 'sector-list';

    sectors.forEach(sector => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="sector-button" data-sector="${sector.name.toLowerCase()}">
                ${sector.name}
                <span class="growth-indicator positive">${sector.growth}</span>
            </button>
        `;
        sectorList.appendChild(li);
    });

    sectorNav.appendChild(sectorList);
}

function initializeAnalysisCharts() {
    // Revenue Analyzer Chart
    const revenueAnalyzerCtx = document.getElementById('revenueAnalyzerChart').getContext('2d');
    new Chart(revenueAnalyzerCtx, {
        type: 'line',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
            datasets: [{
                label: 'Actual Revenue',
                data: [135.2, 142.6, 149.3, 157.8],
                borderColor: 'rgb(75, 192, 192)'
            }, {
                label: 'Projected Revenue',
                data: [134.0, 141.0, 148.0, 155.0],
                borderColor: 'rgb(153, 102, 255)',
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Market Share Chart
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['Elfausian', 'Competitor A', 'Competitor B', 'Others'],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Growth Metrics Chart
    const growthMetricsCtx = document.getElementById('growthMetricsChart').getContext('2d');
    new Chart(growthMetricsCtx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Revenue Growth (%)',
                data: [8.5, 12.3, 15.7, 18.2],
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function initializeWidgetControls() {
    // Revenue Timeframe Control
    document.getElementById('revenueTimeframe').addEventListener('change', (e) => {
        // Simulate data update based on timeframe
        console.log('Updating revenue data for timeframe:', e.target.value);
    });

    // Market Region Control
    document.getElementById('marketRegion').addEventListener('change', (e) => {
        // Simulate data update based on region
        console.log('Updating market share data for region:', e.target.value);
    });

    // Growth Metric Control
    document.getElementById('growthMetric').addEventListener('change', (e) => {
        // Simulate data update based on metric
        console.log('Updating growth data for metric:', e.target.value);
    });
}