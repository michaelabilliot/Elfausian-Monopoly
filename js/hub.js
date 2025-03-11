/**
 * Business Hub Dashboard JavaScript
 * Handles data visualization, sector navigation, and interactive widgets
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all charts
    initializeCharts();
    // Initialize sector navigation
    initializeSectorNav();
    // Add event listeners for interactive widgets
    initializeWidgetControls();
    // Initialize stock ticker
    initializeStockTicker();
});

function initializeCharts() {
    // Set Chart.js defaults for brutalist design
    Chart.defaults.color = '#eaeaea';
    Chart.defaults.borderColor = '#2a2929';
    Chart.defaults.font.family = "'JetBrains Mono', monospace";
    
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue (Billions)',
                data: [135.2, 142.6, 149.3, 157.8],
                borderColor: '#ed9466',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#ed9466',
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
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
                borderColor: '#ed9466',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#ed9466',
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
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
                backgroundColor: 'rgba(237, 148, 102, 0.7)',
                borderColor: '#ed9466',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Innovation Index Chart
    const innovationCtx = document.getElementById('innovationChart').getContext('2d');
    new Chart(innovationCtx, {
        type: 'radar',
        data: {
            labels: ['R&D', 'Patents', 'Tech', 'Impact', 'Sustain'],
            datasets: [{
                label: 'Innovation Metrics',
                data: [95, 92, 96, 94, 93],
                backgroundColor: 'rgba(237, 148, 102, 0.2)',
                borderColor: '#ed9466',
                borderWidth: 2,
                pointBackgroundColor: '#ed9466',
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    },
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    },
                    pointLabels: {
                        font: {
                            size: 10
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        showLabelBackdrop: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
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
                backgroundColor: 'rgba(237, 148, 102, 0.7)',
                borderColor: '#ed9466',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Initialize Analysis Tool Charts
    initializeAnalysisCharts();
}

function initializeStockTicker() {
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
    
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        // Clear existing content
        tickerContent.innerHTML = '';
        
        // Add ticker items
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
        
        // Clone ticker items for seamless looping
        const items = document.querySelectorAll('.ticker-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            tickerContent.appendChild(clone);
        });
    }
}

function initializeSectorNav() {
    const sectors = [
        { name: 'Automotive', growth: '+10.4%', icon: 'fa-car' },
        { name: 'Technology', growth: '+22.3%', icon: 'fa-desktop' },
        { name: 'Healthcare', growth: '+11.9%', icon: 'fa-medkit' },
        { name: 'Media', growth: '+14.2%', icon: 'fa-film' },
        { name: 'Energy', growth: '+13.7%', icon: 'fa-bolt' },
        { name: 'Defense', growth: '+9.8%', icon: 'fa-shield-alt' },
        { name: 'Retail', growth: '+18.7%', icon: 'fa-store' },
        { name: 'Entertainment', growth: '+15.2%', icon: 'fa-theater-masks' },
        { name: 'Real Estate', growth: '+8.6%', icon: 'fa-building' },
        { name: 'Education', growth: '+7.8%', icon: 'fa-graduation-cap' },
        { name: 'Hospitality', growth: '+9.3%', icon: 'fa-hotel' },
        { name: 'Aviation', growth: '+12.4%', icon: 'fa-plane' },
        { name: 'Finance', growth: '+16.5%', icon: 'fa-money-bill-wave' }
    ];

    const sectorNav = document.querySelector('.sector-nav');
    if (sectorNav) {
        // Clear existing content
        sectorNav.innerHTML = '';
        
        const sectorList = document.createElement('ul');
        sectorList.className = 'sector-list';

        sectors.forEach(sector => {
            const li = document.createElement('li');
            li.innerHTML = `
                <button class="sector-button" data-sector="${sector.name.toLowerCase()}">
                    <span><i class="fas ${sector.icon}"></i> ${sector.name}</span>
                    <span class="growth-indicator ${parseFloat(sector.growth) > 0 ? 'positive' : 'negative'}">${sector.growth}</span>
                </button>
            `;
            sectorList.appendChild(li);
        });

        sectorNav.appendChild(sectorList);
        
        // Add event listeners to sector buttons
        const sectorButtons = document.querySelectorAll('.sector-button');
        sectorButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                sectorButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                // Update sector chart (simulated)
                updateSectorChart(this.dataset.sector);
            });
        });
        
        // Activate first sector by default
        if (sectorButtons.length > 0) {
            sectorButtons[0].click();
        }
    }
}

function updateSectorChart(sector) {
    console.log(`Updating sector chart for: ${sector}`);
    // In a real application, this would fetch data and update the chart
    // For this demo, we'll just log the action
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
                borderColor: '#ed9466',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#ed9466',
                pointRadius: 3
            }, {
                label: 'Projected Revenue',
                data: [134.0, 141.0, 148.0, 155.0],
                borderColor: '#2a9d8f',
                borderDash: [5, 5],
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#2a9d8f',
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    // Market Share Analysis Chart
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['Elfausian', 'Competitors', 'Emerging Markets'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: [
                    '#ed9466',
                    '#2a9d8f',
                    '#e76f51'
                ],
                borderColor: '#2a2929',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    // Growth Metrics Chart
    const growthMetricsCtx = document.getElementById('growthMetricsChart').getContext('2d');
    new Chart(growthMetricsCtx, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Users', 'Market Cap', 'Acquisitions', 'R&D'],
            datasets: [{
                label: 'YoY Growth (%)',
                data: [18.5, 24.3, 15.7, 8.2, 32.1],
                backgroundColor: 'rgba(237, 148, 102, 0.7)',
                borderColor: '#ed9466',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(42, 41, 41, 0.3)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initializeWidgetControls() {
    // Revenue Analyzer Controls
    const revenueTimeframe = document.getElementById('revenueTimeframe');
    if (revenueTimeframe) {
        revenueTimeframe.addEventListener('change', function() {
            console.log(`Updating revenue analyzer with timeframe: ${this.value}`);
            // In a real application, this would update the chart with new data
        });
    }

    // Market Region Controls
    const marketRegion = document.getElementById('marketRegion');
    if (marketRegion) {
        marketRegion.addEventListener('change', function() {
            console.log(`Updating market share analysis for region: ${this.value}`);
            // In a real application, this would update the chart with new data
        });
    }
    
    // Growth Metrics Controls
    const growthMetric = document.getElementById('growthMetric');
    if (growthMetric) {
        growthMetric.addEventListener('change', function() {
            console.log(`Updating growth metrics for: ${this.value}`);
            // In a real application, this would update the chart with new data
        });
    }
}