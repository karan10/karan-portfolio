// Home Data
const homeData = {
    name: "Karan Dev",
    email: "karandev43@gmail.com",
    location: "Bengaluru, India",
    profileImage: "assets/images/home/karan.jpg",
    description: [
        "With deep experience in backend systems and a growing focus on GenAI, I build intelligent tools that adapt to user needs. My background spans engineering management, system design, and applied AI—from optimizing media pipelines to designing platforms for scalable contributor profiling.",
        "Today, I'm building next-gen AI products aimed at enhancing productivity and decision-making across domains."
    ],
    socialLinks: {
        github: "https://github.com/karan10",
        linkedin: "https://linkedin.com/in/karandev",
        x: "https://x.com/iamkarandev"
    }
};

// Work Data
const workData = [
    
  ];

// Timeline Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll-triggered animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add hover effects for timeline dots
    timelineItems.forEach(item => {
        const dot = item.querySelector('::before');
        
        item.addEventListener('mouseenter', () => {
            // Add a subtle glow effect
            item.style.transform = 'translateX(3px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing effect for the main heading (if on home page)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--accent-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Anime Filter and Sort functionality
    if (window.location.pathname.includes('anime.html')) {
        initializeAnimeFilters();
    }

    // Projects rendering functionality
    if (window.location.pathname.includes('projects.html')) {
        renderProjectsList();
    }
});

// Anime Filter and Sort Functions
function initializeAnimeFilters() {
    const animeList = document.getElementById('anime-list');
    
    // Get unique studios and types from data
    const studios = [...new Set(animeData.map(anime => anime.studio))].sort();
    const types = [...new Set(animeData.map(anime => anime.type))].sort();
    
    // Create filter controls
    const controlsHTML = `
        <div class="anime-controls">
            <div class="filter-group">
                <label for="status-filter">Status:</label>
                <select id="status-filter">
                    <option value="">All</option>
                    <option value="watching">Currently Watching</option>
                    <option value="completed">Completed</option>
                    <option value="planning">Planning</option>
                </select>
            </div>
            <div class="filter-group">
                <label for="studio-filter">Studio:</label>
                <select id="studio-filter">
                    <option value="">All Studios</option>
                    ${studios.map(studio => `<option value="${studio}">${studio}</option>`).join('')}
                </select>
            </div>
            <div class="filter-group">
                <label for="type-filter">Type:</label>
                <select id="type-filter">
                    <option value="">All Types</option>
                    ${types.map(type => `<option value="${type}">${type}</option>`).join('')}
                </select>
            </div>
            <div class="sort-group">
                <label for="sort-by">Sort by:</label>
                <select id="sort-by">
                    <option value="title">Title</option>
                    <option value="rating">Rating</option>
                    <option value="studio">Studio</option>
                </select>
            </div>
        </div>
    `;
    
    animeList.insertAdjacentHTML('beforebegin', controlsHTML);
    
    // Render initial anime list
    renderAnimeList(animeData);
    
    // Add event listeners
    document.getElementById('status-filter').addEventListener('change', filterAnime);
    document.getElementById('studio-filter').addEventListener('change', filterAnime);
    document.getElementById('type-filter').addEventListener('change', filterAnime);
    document.getElementById('sort-by').addEventListener('change', filterAnime);
}

function filterAnime() {
    const statusFilter = document.getElementById('status-filter').value;
    const studioFilter = document.getElementById('studio-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const sortBy = document.getElementById('sort-by').value;
    
    let filteredAnime = [...animeData];
    
    // Apply filters
    if (statusFilter) {
        filteredAnime = filteredAnime.filter(anime => anime.status === statusFilter);
    }
    
    if (studioFilter) {
        filteredAnime = filteredAnime.filter(anime => anime.studio === studioFilter);
    }
    
    if (typeFilter) {
        filteredAnime = filteredAnime.filter(anime => anime.type === typeFilter);
    }
    
    // Apply sorting
    filteredAnime.sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'title':
                return a.title.localeCompare(b.title);
            case 'studio':
                return a.studio.localeCompare(b.studio);
            default:
                return 0;
        }
    });
    
    renderAnimeList(filteredAnime);
}

function renderAnimeList(animeList) {
    const animeListElement = document.getElementById('anime-list');
    
    const animeHTML = animeList.map(anime => {
        // Convert rating from 10-point scale to 5-point scale
        const ratingOutOf5 = anime.rating
        const fullStars = anime.rating;
        const hasHalfStar = anime.rating % 2 !== 0;
        
        // Generate star HTML
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<span class="star">★</span>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<span class="star">★</span>';
            } else {
                starsHTML += '<span class="star empty">★</span>';
            }
        }
        
        return `
            <div class="project-card" onclick="window.open('${anime.imdbUrl}', '_blank')">
                <div class="anime-badge ${anime.status}">${getStatusText(anime.status)}</div>
                <h3>${anime.title}</h3>
                <img src="${anime.image}" alt="${anime.title}">
                <p><em>${anime.studio}</em></p>
                <div class="description-container">
                    <div class="description-text" id="desc-${anime.title.replace(/\s+/g, '-')}">
                        ${anime.description}
                    </div>
                    <button class="more-button" onclick="event.stopPropagation(); toggleDescription('${anime.title.replace(/\s+/g, '-')}')">
                        Show more
                    </button>
                </div>
                <div class="rating-container">
                    <div class="rating-stars">
                        ${starsHTML}
                    </div>
                    <span class="rating-text">${ratingOutOf5}/5</span>
                </div>
            </div>
        `;
    }).join('');
    
    animeListElement.innerHTML = animeHTML;
}

function toggleDescription(animeId) {
    const descriptionElement = document.getElementById(`desc-${animeId}`);
    const moreButton = descriptionElement.nextElementSibling;
    
    if (descriptionElement.classList.contains('expanded')) {
        descriptionElement.classList.remove('expanded');
        moreButton.textContent = 'Show more';
    } else {
        descriptionElement.classList.add('expanded');
        moreButton.textContent = 'Show less';
    }
}

function getStatusText(status) {
    switch (status) {
        case 'watching':
            return 'Currently Watching';
        case 'completed':
            return 'Completed';
        case 'planning':
            return 'Planning to Watch';
        default:
            return status;
    }
}

// Projects rendering function
function renderProjectsList() {
    const projectsList = document.getElementById('projects-list');
    
    const projectsHTML = projectsData.map(project => `
        <div class="project-card" onclick="window.open('${project.url}', '_blank')">
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <div class="description-container">
                <div class="description-text" id="proj-desc-${project.title.replace(/\s+/g, '-')}">
                    ${project.description}
                </div>
                <button class="more-button" onclick="event.stopPropagation(); toggleProjectDescription('${project.title.replace(/\s+/g, '-')}')">
                    Show more
                </button>
            </div>
            <div class="project-links">
                <a href="${project.url}" target="_blank" onclick="event.stopPropagation()">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                </a>
            </div>
        </div>
    `).join('');
    
    projectsList.innerHTML = projectsHTML;
}

function toggleProjectDescription(projectId) {
    const descriptionElement = document.getElementById(`proj-desc-${projectId}`);
    const moreButton = descriptionElement.nextElementSibling;
    
    if (descriptionElement.classList.contains('expanded')) {
        descriptionElement.classList.remove('expanded');
        moreButton.textContent = 'Show more';
    } else {
        descriptionElement.classList.add('expanded');
        moreButton.textContent = 'Show less';
    }
} 