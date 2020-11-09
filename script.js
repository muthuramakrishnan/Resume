getCityDetails();

function getCityDetails()
{
    let request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    request.send();
    request.onload = function(){
    let data = JSON.parse(this.response);
    for (let countries in data)
    {
        forecastWeather(data[countries].name);
    }
}
}

function forecastWeather(cityName)
{
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=0da05f35eafdccd9f0abb31590bc0e42', true);
    request.send();
    request.onload = function(){
    let data = JSON.parse(this.response);
    console.log('Weather in '+cityName+' is'+data.weather[0].main);
    console.log('Description '+data.weather[0].description);
}
}