const APIkey = "94be394842d980f558a93e755cf55c04"
const api = `https://api.openweathermap.org/data/2.5/weather?lat=45.02&lon=38.59&appid=${APIkey}&units=metric&lang=ru`

let gettedWeather
let gettedTemp
let gettedIcon



const wrapper = document.querySelector('.wrapper')

const btn = document.getElementById('weather')
const getWeather = btn.addEventListener('click', async () => {
    try {
        const response = await fetch(api)
        const data = await response.json()

        gettedWeather = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
        gettedTemp = Math.round(data.main.temp)
        icon = data.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        wrapper.innerHTML = `<img src=${iconUrl}>
                            <div class="current_weather">${gettedWeather}</div>
                            <div class="current_temp">${gettedTemp}°С</div>
                            <div class="subboard"></div>`
                            

    } catch (error) {
        console.error(error)
    }
        
})



