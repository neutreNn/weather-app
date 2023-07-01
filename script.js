const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {
    const APIKey = '964817d4d9afe3677ad5e2c78c85e2a6';
    const city = document.querySelector('search-box input').value;

    if (city === '') 
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
    units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then(json => {

        if (json.cod === '404') {
            container.style.teight = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span')
        const wind = document.querySelector('.weather-box .wind span')

        switch (json.weather[0].main) {
            case 'Clear':
        }
    })
})