// Featured Artists Data
const featuredArtists = [
    {
        name: 'Nova Pulse',
        description: 'Electronic music innovator pushing the boundaries of sound design.',
        image: 'images/artist-1.jpg',
        track: {
            title: 'Digital Dreams',
            file: 'audio/track-1.mp3'
        }
    },
    {
        name: 'Crystal Harmony',
        description: 'Award-winning vocalist blending classical training with modern production.',
        image: 'images/artist-2.jpg',
        track: {
            title: 'Ethereal Echo',
            file: 'audio/track-2.mp3'
        }
    },
    {
        name: 'Quantum Beat',
        description: 'Revolutionary producer creating immersive audio experiences.',
        image: 'images/artist-3.jpg',
        track: {
            title: 'Neural Rhythm',
            file: 'audio/track-3.mp3'
        }
    },
    {
        name: 'Sonic Wave',
        description: 'Genre-defying artist at the forefront of musical innovation.',
        image: 'images/artist-4.jpg',
        track: {
            title: 'Future Fusion',
            file: 'audio/track-4.mp3'
        }
    }
];

// Industry Shortcuts Data
const industryShortcuts = [
    { name: 'Shopping', icon: '🛍️', url: 'shopping.html' },
    { name: 'Flights', icon: '✈️', url: 'flights.html' },
    { name: 'Technology', icon: '💻', url: 'technology.html' },
    { name: 'Entertainment', icon: '🎬', url: 'entertainment.html' },
    { name: 'Education', icon: '📚', url: 'education.html' }
];

// DOM Elements
const artistsGrid = document.querySelector('.artists-grid');
const shortcutsGrid = document.querySelector('.shortcuts-grid');
const player = {
    container: document.querySelector('.music-player'),
    albumArt: document.querySelector('.album-art'),
    trackTitle: document.querySelector('.track-title'),
    artistName: document.querySelector('.track-artist'),
    playPauseBtn: document.querySelector('.play-pause'),
    prevBtn: document.querySelector('.previous'),
    nextBtn: document.querySelector('.next'),
    progress: document.querySelector('.progress'),
    progressBar: document.querySelector('.progress-bar'),
    currentTime: document.querySelector('.current-time'),
    duration: document.querySelector('.duration'),
    volumeBtn: document.querySelector('.volume-btn'),
    volumeProgress: document.querySelector('.volume-progress')
};

// Current Track State
let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;

// Create Artist Card
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" class="artist-image">
        <div class="artist-info">
            <h3 class="artist-name">${artist.name}</h3>
            <p class="artist-description">${artist.description}</p>
            <button class="play-track" data-track="${currentTrackIndex}" aria-label="Play ${artist.track.title}">
                <span class="icon">▶</span>
            </button>
        </div>
    `;

    // Add click event to play button
    const playButton = card.querySelector('.play-track');
    playButton.addEventListener('click', () => playTrack(artist));

    return card;
}

// Create Industry Shortcut
function createShortcut(industry) {
    const shortcut = document.createElement('a');
    shortcut.href = industry.url;
    shortcut.className = 'industry-shortcut';
    shortcut.setAttribute('aria-label', `Go to ${industry.name} division`);
    shortcut.innerHTML = `
        <span class="shortcut-icon">${industry.icon}</span>
        <span class="shortcut-name">${industry.name}</span>
    `;
    return shortcut;
}

// Populate Grids
function populateGrids() {
    if (artistsGrid) {
        featuredArtists.forEach(artist => {
            artistsGrid.appendChild(createArtistCard(artist));
        });
    }

    if (shortcutsGrid) {
        industryShortcuts.forEach(industry => {
            shortcutsGrid.appendChild(createShortcut(industry));
        });
    }
}

// Player Controls
function playTrack(artist) {
    // Update player UI
    player.albumArt.src = artist.image;
    player.trackTitle.textContent = artist.track.title;
    player.artistName.textContent = artist.name;
    
    // Toggle play state
    isPlaying = !isPlaying;
    updatePlayButton();

    // Simulate progress updates
    if (isPlaying) {
        simulatePlayback();
    }
}

function updatePlayButton() {
    const icon = player.playPauseBtn.querySelector('.icon');
    icon.textContent = isPlaying ? '⏸' : '▶';
}

function simulatePlayback() {
    // Reset progress
    let progress = 0;
    player.progress.style.width = '0%';
    
    // Simulate 3-minute track
    const duration = 180; // 3 minutes in seconds
    let currentTime = 0;

    const interval = setInterval(() => {
        if (!isPlaying) {
            clearInterval(interval);
            return;
        }

        currentTime++;
        progress = (currentTime / duration) * 100;
        
        // Update progress bar
        player.progress.style.width = `${progress}%`;
        
        // Update time displays
        player.currentTime.textContent = formatTime(currentTime);
        player.duration.textContent = formatTime(duration);

        if (currentTime >= duration) {
            clearInterval(interval);
            isPlaying = false;
            updatePlayButton();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Event Listeners
player.playPauseBtn.addEventListener('click', () => {
    const currentArtist = featuredArtists[currentTrackIndex];
    playTrack(currentArtist);
});

player.prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + featuredArtists.length) % featuredArtists.length;
    playTrack(featuredArtists[currentTrackIndex]);
});

player.nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % featuredArtists.length;
    playTrack(featuredArtists[currentTrackIndex]);
});

player.volumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    player.volumeBtn.querySelector('.icon').textContent = isMuted ? '🔇' : '🔊';
    player.volumeProgress.style.width = isMuted ? '0%' : '70%';
});

player.progressBar.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    player.progress.style.width = `${percent * 100}%`;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateGrids();
});