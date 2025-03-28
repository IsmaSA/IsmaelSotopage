// Basic form validation and submission feedback
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default mailto behavior for demo

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});