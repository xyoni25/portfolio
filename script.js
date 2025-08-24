// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Initialize typewriter effect
    initTypewriter();

    // Initialize skill bars animation
    initSkillBars();

    // Load projects
    loadProjects();

    // Load experience
    loadExperience();

    // Initialize contact form
    initContactForm();

    // Initialize scroll animations
    initScrollAnimations();
});

// Typewriter effect
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    const roles = [
        'Computer Science Student',
        'IT Technician',
        'Web Developer'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriter.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const width = skillFill.getAttribute('data-width');
                skillFill.style.width = width;
                skillFill.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Load projects data
function loadProjects() {
    const projects = [
        {
            title: 'Online Car Parking System',
            description: 'A comprehensive web-based parking management system with admin and user dashboards, real-time availability tracking, and automated pricing.',
            technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            features: [
                'Admin Dashboard',
                'User Registration & Login',
                'Real-time Parking Availability',
                'Automated Pricing System',
                'Booking Management',
                'Payment Integration'
            ],
            icon: 'fas fa-car',
            github: 'https://github.com/yonatan-assefa/parking-system',
            demo: 'https://parking-demo.example.com'
        },
        {
            title: 'Mobile Business Tracking App',
            description: 'A Flutter-based mobile application for tracking business performance, analytics, and generating comprehensive reports for better decision-making.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
            features: [
                'Performance Analytics',
                'Real-time Reporting',
                'Data Visualization',
                'Multi-platform Support',
                'Offline Capability',
                'Export Functionality'
            ],
            icon: 'fas fa-chart-line',
            github: 'https://github.com/yonatan-assefa/business-tracker',
            demo: null
        },
        {
            title: 'Network Infrastructure Setup',
            description: 'Complete network infrastructure design and implementation for a small business, including server setup, security configuration, and maintenance protocols.',
            technologies: ['Windows Server', 'Cisco', 'Network Security', 'Active Directory'],
            features: [
                'Network Design & Planning',
                'Server Configuration',
                'Security Implementation',
                'User Management',
                'Backup Solutions',
                'Monitoring Systems'
            ],
            icon: 'fas fa-network-wired',
            github: null,
            demo: null
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load experience data
function loadExperience() {
    const experiences = [
        {
            date: '2022 - Present',
            title: 'IT Support Technician',
            company: 'Local Business • Internship/Part-time',
            description: 'Provided comprehensive IT support including hardware maintenance, network troubleshooting, and system administration. Maintained 99% system uptime and reduced hardware failure incidents by 40%.'
        },
        {
            date: '2021 - Present',
            title: 'Web Developer',
            company: 'Freelance Projects',
            description: 'Developed custom web applications using PHP, MySQL, HTML, CSS, and JavaScript for various clients. Built 5+ complete web applications with secure user authentication systems.'
        },
        {
            date: '2022',
            title: 'Network Administrator',
            company: 'Small Business Setup • Contract',
            description: 'Designed and implemented complete network infrastructure for a small business including server setup and security configuration. Configured Windows Server environment and established security protocols.'
        },
        {
            date: '2020 - Present',
            title: 'Computer Science Student',
            company: 'University • Bachelor\'s Degree',
            description: 'Pursuing Bachelor\'s degree in Computer Science with comprehensive study of programming, algorithms, data structures, and software engineering. Specialized training in network administration and technical support.'
        }
    ];

    const experienceTimeline = document.getElementById('experience-timeline');
    
    experiences.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        experienceItem.innerHTML = `
            <div class="experience-content">
                <div class="experience-date">${experience.date}</div>
                <h3 class="experience-title">${experience.title}</h3>
                <div class="experience-company">${experience.company}</div>
                <p class="experience-description">${experience.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        experienceTimeline.appendChild(experienceItem);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-header, .about-text, .personal-info, .skill-category, .project-card, .experience-item, .contact-info, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function downloadCV() {
    // For now, show a message that CV will be available soon
    // You can replace this with actual CV file path when available
    alert('CV download will be available soon. Please contact me directly for my resume.');
    
    // Uncomment and update the path below when you have the CV file ready:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf'; // Update with actual CV file path
    // link.download = 'Yonatan_Assefa_Gudeta_CV.pdf';
    // link.click();
}

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth reveal animations on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.skill-bar, .project-card, .experience-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});