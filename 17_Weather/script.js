let weather = {
    apiKey: "df346adacac2f3a770a7886d91ff2cf6"
}

const searchBar = document.querySelector('.search-bar')
const cityEl = document.querySelector('.city')
const currentTempEl = document.querySelector('.current-temp')
const descriptionEl = document.querySelector('.description')
const tempHighEl = document.querySelector('.temp-high')
const tempLowEl = document.querySelector('.temp-low')
const humidityEl = document.querySelector('.humidity')
const searchBtn = document.querySelector('.search-button')


function kelvinToFahrenheight(kelvin) {
    return Math.floor(1.8 * (kelvin - 273) + 32)
}

async function getData(userCity) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${weather.apiKey}
    `)
    const data = await response.json()
    return data
}

searchBtn.addEventListener('click', () => {
    getData(searchBar.value).then(data => {
        console.log(data)
        const cityName = data.name
        const description = data.weather[0].description
        const tempMain = kelvinToFahrenheight(data.main.temp)
        const tempLow = kelvinToFahrenheight(data.main.temp_min)
        const tempHigh = kelvinToFahrenheight(data.main.temp_max)
        const humidity = data.main.humidity
    
        cityEl.innerText = cityName
        descriptionEl.innerText = description
        currentTempEl.innerText = `${tempMain} ℉`
        tempLowEl.innerText = `${tempLow} ℉`
        tempHighEl.innerText = `${tempHigh} ℉`
        humidityEl.innerText = `${humidity}%`
        
        console.log(cityName, description, tempMain, tempLow, tempHigh, humidity)
    }).catch(err => alert('errors: ' + err.message))
})