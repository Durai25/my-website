// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    const dialogOverlay = document.getElementById('dialogOverlay');
    const closeDialog = document.getElementById('closeDialog');
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    // Open dialog
    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        dialogOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when dialog is open
    });

    // Close dialog
    function closeContactDialog() {
        dialogOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        statusMessage.textContent = '';
        statusMessage.className = 'status-message';
        contactForm.reset();
    }

    closeDialog.addEventListener('click', closeContactDialog);

    // Close dialog when clicking outside
    dialogOverlay.addEventListener('click', function(e) {
        if (e.target === dialogOverlay) {
            closeContactDialog();
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formDataObject = Object.fromEntries(formData.entries());

        // Here you would typically send the data to your server
        console.log('Form submitted with data:', formDataObject);

        // Show success message
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.className = 'status-message success';

        // Close dialog after short delay
        setTimeout(closeContactDialog, 2000);
    });
});

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Auto-advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);

    // Initialize first slide
    showSlide(0);
});

// Handle escape key to close dialog
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const dialogOverlay = document.getElementById('dialogOverlay');
        if (dialogOverlay.style.display === 'flex') {
            dialogOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});