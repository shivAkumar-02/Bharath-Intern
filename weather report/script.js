function getWeather() {
    const apiKey = '5484626b97503cd76535ee553de2655d'; 
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById('location').textContent = data.name + ', ' + data.sys.country;
            document.getElementById('temperature').textContent = 'Temperature: ' + data.main.temp + '°C';
            document.getElementById('description').textContent = 'Description: ' + data.weather[0].description;

            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weather-icon').innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}