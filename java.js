const form = document.querySelector('form');
const feedback = document.querySelector('#feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const meal = document.querySelector('#meal').value;
    const date = document.querySelector('#date').checked;
    if (name === '' || meal === '') {
        feedback.innerHTML = 'Please enter your name and select a meal.';
    } else {
        feedback.innerHTML = `Thank you, ${name}! Your ${meal} order has been submitted.`;
        if (date) {
            feedback.innerHTML += ' Your order will be delivered on a future date.';
        }
        form.reset();
    }
});