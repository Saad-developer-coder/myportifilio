// Smooth scrolling for navigation links
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


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(() => {
        alert('Oops! Something went wrong. Please try again.');
    });
});
