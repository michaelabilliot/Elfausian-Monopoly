document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts
    initializeCharts();

    // Initialize mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});

function initializeCharts() {
    // Global Impact Chart
    new Chart(document.getElementById('globalImpactChart'), {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Lives Impacted (Millions)',
                data: [2.1, 3.4, 5.2, 7.8, 10.5],
                borderColor: '#004d7a',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Research Progress Chart
    new Chart(document.getElementById('researchProgressChart'), {
        type: 'bar',
        data: {
            labels: ['AI Diagnostics', 'Gene Therapy', 'Nano Medicine', 'Bio-Engineering'],
            datasets: [{
                label: 'Research Progress (%)',
                data: [85, 72, 68, 91],
                backgroundColor: '#004d7a'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Patient Outcomes Chart
    new Chart(document.getElementById('patientOutcomesChart'), {
        type: 'doughnut',
        data: {
            labels: ['Excellent', 'Good', 'Satisfactory', 'Needs Improvement'],
            datasets: [{
                data: [45, 30, 20, 5],
                backgroundColor: [
                    '#004d7a',
                    '#0077b6',
                    '#00b4d8',
                    '#90e0ef'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Innovation Index Chart
    new Chart(document.getElementById('innovationIndexChart'), {
        type: 'radar',
        data: {
            labels: [
                'Technology',
                'Research',
                'Patient Care',
                'Efficiency',
                'Sustainability',
                'Global Reach'
            ],
            datasets: [{
                label: 'Current Performance',
                data: [95, 88, 90, 85, 82, 87],
                fill: true,
                backgroundColor: 'rgba(0, 77, 122, 0.2)',
                borderColor: '#004d7a',
                pointBackgroundColor: '#004d7a',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#004d7a'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}