const city = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', () => {
	const cityName = city.value;
	getWeather(cityName);
});

async function getWeather(cityName) {
	try {
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
		const data = await response.json();
		renderWeather(data);
	} catch (error) {
		console.error(error);
	}
}

function renderWeather(data) {
	const weather = document.querySelector('.weather');

	weather.innerHTML = `
		<div class="weather__item">
			<div class="weather__item-title">Город</div>
			<div class="weather__item-value">${data.name}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Температура</div>
			<div class="weather__item-value">${data.main.temp}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Давление</div>
			<div class="weather__item-value">${data.main.pressure}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Описание</div>
			<div class="weather__item-value">${data.weather[0].description}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Влажность</div>
			<div class="weather__item-value">${data.main.humidity}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Скорость ветра</div>
			<div class="weather__item-value">${data.wind.speed}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Направление ветра</div>
			<div class="weather__item-value">${data.wind.deg}</div>
		</div>
		<div class="weather__item">
			<div class="weather__item-title">Иконка</div>
			<div class="weather__item-value">
				<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
			</div>
		</div>
	`;
}