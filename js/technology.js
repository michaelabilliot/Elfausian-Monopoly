document.addEventListener('DOMContentLoaded', () => {
    // Innovation showcase data
    const innovations = [
        {
            title: 'Quantum Computing Platform',
            description: 'Revolutionary quantum processing system capable of solving complex problems in milliseconds',
            image: '../assets/quantum-computing.jpg'
        },
        {
            title: 'Neural Interface',
            description: 'Direct brain-computer interface technology for enhanced human-machine interaction',
            image: '../assets/neural-interface.jpg'
        },
        {
            title: 'AI Research Platform',
            description: 'Advanced artificial intelligence system for breakthrough scientific discoveries',
            image: '../assets/ai-research.jpg'
        },
        {
            title: 'Sustainable Energy Tech',
            description: 'Next-generation renewable energy solutions for a sustainable future',
            image: '../assets/sustainable-energy.jpg'
        }
    ];

    // Interactive demo data
    const demos = [
        {
            title: 'Quantum Simulator',
            description: 'Experience quantum computing through our interactive simulator',
            specs: {
                'Processing Power': '100 Qubits',
                'Error Rate': '0.001%',
                'Operation Time': '1.5ms'
            }
        },
        {
            title: 'AI Assistant Demo',
            description: 'Test our latest AI assistant capabilities',
            specs: {
                'Response Time': '0.1s',
                'Accuracy': '99.9%',
                'Language Support': '50+ Languages'
            }
        },
        {
            title: 'Neural Tech Preview',
            description: 'Preview our neural interface technology',
            specs: {
                'Bandwidth': '1TB/s',
                'Latency': '0.5ms',
                'Resolution': '8K Neural'
            }
        }
    ];

    // Populate innovation showcase
    const showcaseGrid = document.querySelector('.showcase-grid');
    innovations.forEach(innovation => {
        const card = document.createElement('div');
        card.className = 'innovation-card';
        card.innerHTML = `
            <div class="innovation-image" style="background-image: url(${innovation.image})"></div>
            <h3>${innovation.title}</h3>
            <p>${innovation.description}</p>
        `;
        showcaseGrid.appendChild(card);
    });

    // Populate interactive demos
    const demoContainer = document.querySelector('.demo-container');
    demos.forEach(demo => {
        const card = document.createElement('div');
        card.className = 'demo-card';
        
        // Create specs HTML
        const specsHTML = Object.entries(demo.specs)
            .map(([key, value]) => `<div class="spec-item"><span>${key}:</span> ${value}</div>`)
            .join('');

        card.innerHTML = `
            <h3>${demo.title}</h3>
            <p>${demo.description}</p>
            <div class="demo-specs">${specsHTML}</div>
            <button class="demo-button">Launch Demo</button>
        `;

        // Add click handler for demo button
        card.querySelector('.demo-button').addEventListener('click', () => {
            alert('Demo feature coming soon!');
        });

        demoContainer.appendChild(card);
    });

    // Add hover effects for highlight cards
    document.querySelectorAll('.highlight-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});