// Data storage
let aboutData = {
    "title": "About Me",
    "description": "I'm a full-stack developer who spends most days wondering why my code worked yesterday but not today. I specialize in turning client requirements into something completely different that they'll eventually accept because deadlines.",
    "personalInfo": {
        "name": "Karan Dev",
        "email": "karan@example.com",
        "location": "San Francisco, CA"
    }
};

let workData = {
    "title": "Work Experience",
    "experiences": [
        {
            "title": "Senior Full Stack Developer",
            "company": "Tech Innovations Inc.",
            "period": "2020 - Present",
            "description": "Professional Googler with expertise in copying from Stack Overflow. Spent most of my time explaining to managers why their 'quick fix' would take two weeks.",
            "url": "https://techinnovations.example.com"
        },
        {
            "title": "Full Stack Developer",
            "company": "Digital Solutions LLC",
            "period": "2018 - 2020",
            "description": "Translated client requests like 'make it pop' into actual features. Maintained legacy code held together by duct tape and prayers.",
            "url": "https://digitalsolutions.example.com"
        }
    ]
};

let projectsData = {
    "title": "My Projects",
    "projects": [
        {
            "title": "E-commerce Platform",
            "description": "A full-featured e-commerce platform with real-time inventory management.",
            "image": "images/projects/ecommerce.jpg",
            "tags": ["React", "Node.js", "MongoDB"],
            "category": "web",
            "liveLink": "#",
            "codeLink": "#",
            "url": "https://ecommerce-project.example.com"
        },
        {
            "title": "Task Management App",
            "description": "A collaborative task management application with real-time updates.",
            "image": "images/projects/taskmanager.jpg",
            "tags": ["Vue.js", "Firebase", "Tailwind"],
            "category": "web",
            "liveLink": "#",
            "codeLink": "#",
            "url": "https://taskmanager-project.example.com"
        }
    ]
};

let animeData = {
    "title": "Favorite Anime",
    "animes": [
        {
            "id": 1,
            "title": "Attack on Titan",
            "studio": "by Wit Studio / MAPPA",
            "description": "A dark fantasy series about humanity's fight for survival against man-eating giants called Titans.",
            "image": "images/anime/aot.jpg",
            "url": "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
        },
        {
            "id": 2,
            "title": "Death Note",
            "studio": "by Madhouse",
            "description": "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
            "image": "images/anime/deathnote.jpg",
            "url": "https://myanimelist.net/anime/1530/Death_Note"
        },
        {
            "id": 3,
            "title": "Demon Slayer",
            "studio": "by ufotable",
            "description": "A young man becomes a demon slayer after his family is slaughtered and his sister is turned into a demon.",
            "image": "images/anime/demonslayer.jpg",
            "url": "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba"
        }
    ]
};

let blogsData = {
    "title": "Latest Blogs",
    "blogs": [
        {
            "title": "Web Development Trends in 2023",
            "date": "June 15, 2023",
            "image": "images/blogs/webdev.jpg",
            "excerpt": "Exploring the latest technologies and methodologies that are shaping the future of web development.",
            "url": "https://blog.example.com/web-dev-trends-2023"
        },
        {
            "title": "The Impact of AI on Software Development",
            "date": "May 22, 2023",
            "image": "images/blogs/ai.jpg",
            "excerpt": "How artificial intelligence is revolutionizing the way we build, test, and deploy software applications.",
            "url": "https://blog.example.com/ai-software-development"
        }
    ]
};

let contactData = {
    "title": "Contact Me",
    "email": "karan@example.com",
    "location": "San Francisco, CA",
    "socialLinks": {
        "github": "https://github.com/",
        "linkedin": "https://linkedin.com/",
        "twitter": "https://twitter.com/"
    }
};

// Function to fetch JSON data
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Could not fetch data from ${url}:`, error);
        return null;
    }
}

// Load all data
function loadAllData() {
    // Populate sections with data
    populateAboutSection();
    populateWorkSection();
    displayProjects();
    populateAnimeSection();
    populateBlogsSection();
    populateContactSection();
}

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contact-form');
const mainContent = document.querySelector('.main-content');

// Create hamburger menu for mobile if it doesn't exist
if (!hamburger) {
    const hamburgerDiv = document.createElement('div');
    hamburgerDiv.classList.add('hamburger');
    hamburgerDiv.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    document.body.appendChild(hamburgerDiv);

    // Update hamburger reference
    const hamburger = document.querySelector('.hamburger');

    // Mobile Navigation Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
} else {
    // Mobile Navigation Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Get all sections
    const sections = document.querySelectorAll('section');

    // Check which section is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to current section link
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Project filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        displayProjects(filterValue);
    });
});

// Display projects based on filter
function displayProjects(filter = 'all') {
    if (!projectsData || !projectsData.projects) return;

    // Update section title
    const projectsTitle = document.querySelector('#projects .section-title span');
    if (projectsTitle) {
        projectsTitle.textContent = projectsData.title || 'My Projects';
    }

    // Clear projects container
    projectsContainer.innerHTML = '';

    // Filter projects
    const filteredProjects = filter === 'all' 
        ? projectsData.projects 
        : projectsData.projects.filter(project => project.category === filter);

    // Create project cards
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Create tags HTML
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    // Create tech dots for decorative effect
    const techDotsHTML = `
        <div class="tech-dots">
            <div class="tech-dot"></div>
            <div class="tech-dot"></div>
            <div class="tech-dot"></div>
        </div>
    `;

    card.innerHTML = `
        <a href="${project.url}" target="_blank" class="project-link">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="project-live-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.codeLink}" target="_blank" class="project-code-link"><i class="fab fa-github"></i> Source Code</a>
                </div>
            </div>
            ${techDotsHTML}
        </a>
    `;

    return card;
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formValues);

        // Show success message
        alert('Message received! I\'ll add it to my collection of unread emails. Might get back to you... eventually. No promises though.');

        // Reset form
        contactForm.reset();
    });
}

// Function to populate About section
function populateAboutSection() {
    if (!aboutData) return;

    // Update section title
    const aboutTitle = document.querySelector('#about .section-title span');
    if (aboutTitle) {
        aboutTitle.textContent = aboutData.title || 'About Me';
    }

    // Update about text
    const aboutTextContainer = document.querySelector('.about-text');
    if (aboutTextContainer && aboutData.description) {
        const descriptionP = aboutTextContainer.querySelector('.about-description');
        if (descriptionP) {
            descriptionP.textContent = aboutData.description;
        }
    }

    // Update personal info
    if (aboutData.personalInfo) {
        const nameValue = document.querySelector('.name-value');
        const emailValue = document.querySelector('.email-value');
        const locationValue = document.querySelector('.location-value');

        if (nameValue) nameValue.textContent = aboutData.personalInfo.name;
        if (emailValue) emailValue.textContent = aboutData.personalInfo.email;
        if (locationValue) locationValue.textContent = aboutData.personalInfo.location;
    }

    // Update image
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage && aboutData.image) {
        aboutImage.src = aboutData.image;
        aboutImage.alt = aboutData.title || 'About Me';
    }
}

// Function to populate Work section
function populateWorkSection() {
    if (!workData) return;

    // Update section title
    const workTitle = document.querySelector('#work .section-title span');
    if (workTitle) {
        workTitle.textContent = workData.title || 'Work Experience';
    }

    // Update timeline items
    const timeline = document.querySelector('.timeline');
    if (timeline && workData.experiences) {
        timeline.innerHTML = '';

        workData.experiences.forEach(experience => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${experience.title}</h3>
                    <h4>${experience.company}</h4>
                    <p class="timeline-date">${experience.period}</p>
                    <p>${experience.description}</p>
                    <a href="${experience.url}" target="_blank" class="timeline-link">View Company <i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }
}

// Function to populate Anime section
function populateAnimeSection() {
    if (!animeData) return;

    // Update section title
    const animeTitle = document.querySelector('#anime .section-title span');
    if (animeTitle) {
        animeTitle.textContent = animeData.title || 'Favorite Anime';
    }

    // Update anime grid
    const animeGrid = document.querySelector('.anime-grid');
    if (animeGrid && animeData.animes) {
        animeGrid.innerHTML = '';

        animeData.animes.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.classList.add('anime-card');
            animeCard.innerHTML = `
                <a href="${anime.url}" target="_blank" class="anime-link">
                    <div class="anime-cover">
                        <img src="${anime.image}" alt="${anime.title}">
                    </div>
                    <div class="anime-info">
                        <h3>${anime.title}</h3>
                        <p class="anime-studio">${anime.studio}</p>
                        <p class="anime-description">${anime.description}</p>
                    </div>
                </a>
            `;
            animeGrid.appendChild(animeCard);
        });
    }
}

// Function to populate Blogs section
function populateBlogsSection() {
    if (!blogsData) return;

    // Update section title
    const blogsTitle = document.querySelector('#blogs .section-title span');
    if (blogsTitle) {
        blogsTitle.textContent = blogsData.title || 'Latest Blogs';
    }

    // Update blogs grid
    const blogsGrid = document.querySelector('.blogs-grid');
    if (blogsGrid && blogsData.blogs) {
        blogsGrid.innerHTML = '';

        blogsData.blogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            blogCard.innerHTML = `
                <a href="${blog.url}" target="_blank" class="blog-link">
                    <div class="blog-image">
                        <img src="${blog.image}" alt="${blog.title}">
                    </div>
                    <div class="blog-info">
                        <div class="blog-date">${blog.date}</div>
                        <h3>${blog.title}</h3>
                        <p class="blog-excerpt">${blog.excerpt}</p>
                        <span class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            `;
            blogsGrid.appendChild(blogCard);
        });
    }
}

// Function to populate Contact section
function populateContactSection() {
    if (!contactData) return;

    // Update section title
    const contactTitle = document.querySelector('#contact .section-title span');
    if (contactTitle) {
        contactTitle.textContent = contactData.title || 'Contact Me';
    }

    // Update contact info
    const contactEmail = document.querySelector('.contact-email');
    const contactLocation = document.querySelector('.contact-location');
    
    if (contactEmail) contactEmail.textContent = contactData.email;
    if (contactLocation) contactLocation.textContent = contactData.location;

    // Update social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        if (link.classList.contains('github-link')) {
            link.href = contactData.socialLinks.github;
        } else if (link.classList.contains('linkedin-link')) {
            link.href = contactData.socialLinks.linkedin;
        } else if (link.classList.contains('twitter-link')) {
            link.href = contactData.socialLinks.twitter;
        }
    });

    // Update form placeholders
    if (contactData.formPlaceholders) {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const subjectInput = document.querySelector('#subject');
        const messageInput = document.querySelector('#message');
        const submitButton = document.querySelector('#contact-form button[type="submit"]');

        if (nameInput) nameInput.placeholder = contactData.formPlaceholders.name;
        if (emailInput) emailInput.placeholder = contactData.formPlaceholders.email;
        if (subjectInput) subjectInput.placeholder = contactData.formPlaceholders.subject;
        if (messageInput) messageInput.placeholder = contactData.formPlaceholders.message;
        if (submitButton) submitButton.textContent = contactData.formPlaceholders.submitButton;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load all data
    loadAllData();

    // Initialize other event listeners
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                sidebar.classList.remove('active');
            }
        });
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            displayProjects(filterValue);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form submitted:', formValues);
            alert('Message received! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }
}
