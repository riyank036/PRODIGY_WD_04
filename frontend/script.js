let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Text animation for the role section
const textAnimation = document.querySelector('.text-animation span');
const roles = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeEffect() {
    isEnd = false;
    textAnimation.textContent = roles[roleIndex].substring(0, charIndex);

    if(!isDeleting && charIndex < roles[roleIndex].length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isEnd = true;
        isDeleting = !isDeleting;

        if(isDeleting) {
            setTimeout(typeEffect, 1000);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500);
        }
    }
}

typeEffect();

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
            });
        }
    });
};

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Load projects from API
async function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        const projects = await getProjects();
        
        if (projects && projects.length > 0) {
            projectsContainer.innerHTML = '';
            
            projects.forEach(project => {
                projectsContainer.innerHTML += `
                    <div class="service-box">
                        <div class="service-info">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <div class="tech-stack">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <a href="${project.projectUrl}" target="_blank" class="btn">View Project</a>
                        </div>
                    </div>
                `;
            });
        } else {
            projectsContainer.innerHTML = `
                <div class="service-box">
                    <div class="service-info">
                        <h4>No projects found</h4>
                        <p>No projects are currently available.</p>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = `
            <div class="service-box">
                <div class="service-info">
                    <h4>Error loading projects</h4>
                    <p>There was an error loading the projects. Please try again later.</p>
                </div>
            </div>
        `;
    }
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Sending message...';
    formMessage.className = 'form-message pending';
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await submitContactForm(formData);
        
        if (response.success) {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'form-message success';
            document.getElementById('contactForm').reset();
        } else {
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.className = 'form-message error';
        }
    } catch (error) {
        formMessage.textContent = error.message || 'Failed to send message. Please try again.';
        formMessage.className = 'form-message error';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});