document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = document.getElementById(btn.dataset.section);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const submitBtn = document.getElementById('submit-email');
    const emailInput = document.getElementById('email-input');
    const display = document.getElementById('email-display');
    const resumeBtn = document.getElementById('resumebtn');
    const projects = document.querySelectorAll('.project');
    const lightbox = document.getElementById('lightbox');
    const closeLightbox = document.getElementById('close-lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const slideImage = document.getElementById('slide-image');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    const projectData = {
        'Project 1': {
            description: 'A BMI calculator made with HTML, CSS, and JavaScript. It allows users to input their weight and height to calculate their Body Mass Index (BMI) and provides feedback on their health status based on the calculated BMI.',
            images: ['project1/p1sc1.png', 'project1/p1sc2.png', 'project1/p1sc3.png', 'project1/p1sc4.png', 'project1/p1sc5.png']
        },
        'Project 2': {
            description: 'This is a description for Project 2. Another amazing project.',
            images: ['project2/p2sc1.png', 'project2/p2sc2.png']
        }
    };

    let currentProject = '';
    let currentImageIndex = 0;

    projects.forEach(project => {
        project.addEventListener('click', () => {
            currentProject = project.textContent.trim();
            const data = projectData[currentProject];
            if (data) {
                lightboxTitle.textContent = currentProject;
                lightboxDescription.textContent = data.description;
                currentImageIndex = 0;
                updateSlide();
                lightbox.classList.remove('hidden');
            }
        });
    });

    function updateSlide() {
        const images = projectData[currentProject].images;
        slideImage.src = images[currentImageIndex];
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === images.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateSlide();
        }
    });

    nextBtn.addEventListener('click', () => {
        const images = projectData[currentProject].images;
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateSlide();
        }
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    resumeBtn.addEventListener('click', () => {
        const href = resumeBtn.dataset.href;
        if (href) {
            const link = document.createElement('a');
            link.href = href;
            link.download = 'omar_rosas_resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    submitBtn.addEventListener('click', () => {
        const email = emailInput.value;
        if (email) {
            const data = { email };
            display.textContent = JSON.stringify(data);
            localStorage.setItem('emails', JSON.stringify([data]));
        }
    });

});