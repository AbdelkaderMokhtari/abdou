function showContent(element) {
    const box = element.closest('.box');
    const paragraph = box.querySelector('p');
    const plusIcon = box.querySelector('.bx-plus');
    const minusIcon = box.querySelector('.bx-minus');

    // Show the paragraph content
    paragraph.classList.add('visible');
    
    // Hide the plus icon and show the minus icon
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'inline-block';
}

function hideContent(element) {
    const box = element.closest('.box');
    const paragraph = box.querySelector('p');
    const plusIcon = box.querySelector('.bx-plus');
    const minusIcon = box.querySelector('.bx-minus');

    // Hide the paragraph content
    paragraph.classList.remove('visible');
    
    // Show the plus icon and hide the minus icon
    plusIcon.style.display = 'inline-block';
    minusIcon.style.display = 'none';
}

// Event listeners for the icons
document.querySelectorAll('.bx-plus').forEach(icon => {
    icon.addEventListener('click', function() {
        showContent(this);
    });
});

document.querySelectorAll('.bx-minus').forEach(icon => {
    icon.addEventListener('click', function() {
        hideContent(this);
    });
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.text', { origin: 'top' });
ScrollReveal().reveal('.img, .our', { origin: 'bottom' });
ScrollReveal().reveal('.box', { origin: 'left' });


