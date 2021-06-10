const apiKey = process.env.REACT_APP_OWM_KEY;

export default async function fetchWeather(latitude, longitude) {
    const owmAPIURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=${latitude}&lon=${longitude}&units=metric&lang=fr`;
    const response = await fetch(owmAPIURL);
    return await response.json();
}