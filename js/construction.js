document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Sample project data
    const projects = [
        {
            title: 'Mega City Development',
            description: 'A groundbreaking urban development project spanning 500 acres',
            image: '../assets/images/project1.jpg'
        },
        {
            title: 'Sustainable Industrial Complex',
            description: 'State-of-the-art eco-friendly manufacturing facility',
            image: '../assets/images/project2.jpg'
        },
        {
            title: 'Smart Infrastructure Network',
            description: 'Integrated smart city infrastructure implementation',
            image: '../assets/images/project3.jpg'
        },
        {
            title: 'Green Energy Hub',
            description: 'Renewable energy facility powering 1 million homes',
            image: '../assets/images/project4.jpg'
        }
    ];

    // Sample timeline data
    const timelineEvents = [
        {
            year: '2024',
            title: 'Global Expansion',
            description: 'Expanded operations to 50 new countries'
        },
        {
            year: '2023',
            title: 'Sustainability Initiative',
            description: 'Launched zero-carbon construction program'
        },
        {
            year: '2022',
            title: 'Innovation Award',
            description: 'Received Global Construction Innovation Award'
        },
        {
            year: '2021',
            title: 'Smart City Project',
            description: 'Completed first fully-integrated smart city'
        }
    ];

    // Populate project cards
    const projectGrid = document.querySelector('.masonry-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(card);
    });

    // Populate timeline
    const timelineContainer = document.querySelector('.timeline-container');
    timelineEvents.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${event.year} - ${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Animate timeline items on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});