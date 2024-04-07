document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "18885b37102c67ef06a658b32bbc8911";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    async function checkWeather(city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            updateUI(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // You can handle errors here, for example, show an error message to the user
        }
    }

    function updateUI(data) {
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".weather").textContent = data.main.temp + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + " km/h";
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
// if(!response.ok)
// {
//     throw new Error('Network response was not ok.');
// }

// catch (error) {
//     console.error('Error fetching data:', error);
    
// }