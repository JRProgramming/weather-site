const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messageTwo = document.getElementById('message-two')
weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const location = search.value;
    fetch(`http://localhost:8080/weather/?address=${location}`).then(response => {
        response.json().then(data => {
            if(data.error) return messageOne.textContent = data.error;
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        });
    });
});