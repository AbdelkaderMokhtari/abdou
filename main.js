// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

// Toggle the navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove toggle icon and close navbar on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


// scroll reveal

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .another', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, portfolio-box, contact form', { origin: 
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTube', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fullName || !email || !mobile || !subject || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate sending the message (you can replace this with actual functionality)
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
});


emailjs.init("service_4eukmhj"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_4eukmhj", "template_2whivh7", formData)
        .then(function (response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function (error) {
            alert('Failed to send message. Please try again later.');
            console.error('Error:', error);
        });
});
