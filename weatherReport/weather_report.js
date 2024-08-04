// Function to show weather details

function showweatherDetails(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = 'd762628c3d5e4371025e64ad00fa5b8d'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
             .then(response => response.json())
             .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                                        <tr>
                                        <th scope="row">Longitude of the location</th>
                                        <td colspan="3">${data.coord.lon}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Latitude of the location</th>
                                        <td colspan="3">${data.coord.lat}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Temperature</th>
                                        <td colspan="3">${data.main.temp} &deg;F
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Humidity, %</th>
                                        <td colspan="3">${data.main.humidity} &deg;F
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Minimum temperature at the moment</th>
                                        <td colspan="3"> ${data.main.temp_min} &deg;F
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Maximum temperature at the moment</th>
                                        <td colspan="3">${data.main.temp_max} &deg;F
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Atmospheric pressure on the sea level, hPa</th>
                                        <td colspan="3">${data.main.sea_level}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Atmospheric pressure on the ground level, hPa</th>
                                        <td colspan="3">${data.main.grnd_level}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Wind Speed</th>
                                        <td colspan="3">${data.wind.speed}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Wind Direction</th>
                                        <td colspan="3">${data.wind.deg}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Cloudiness, %</th>
                                        <td colspan="3">${data.clouds.all}</td>
                                        </tr>
                                        <tr>
                                        <tr>
                                        <th scope="row">Country Code</th>
                                        <td colspan="3">${data.sys.country}</td>
                                        </tr>`;
                                        
             })

             .catch(error => {
                      console.error('Error fetching weather:', error);
                      const weatherInfo = document.getElementById('weatherInfo');
                      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again</p>`;
             });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

