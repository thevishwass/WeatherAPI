
// Weather App Logic

const clickBut = document.querySelector('#but01');
const inputBox = document.querySelector('#inputCity');

const apiKey = "55fd50a0d35172dbeb7e900e0c10e1b1"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`

async function checkWeather(inputCity) {
    const response = await fetch(apiUrl + `&q=${inputCity}&appid=${apiKey}`)
    const op = await response.json();

    if (op.cod === "404") {
        document.querySelector('.message p').innerHTML = 'City not found!';
        // return;
        }

    console.log(op)
    
    document.querySelector('#speed').innerHTML = op.wind.speed + "km/h";
    opTemp = document.querySelector('#temp').innerHTML = Math.round(op.main.temp) + "°C";
    document.querySelector('#cityName').innerHTML = op.name;
    
    if (op.weather[0].main == 'Clouds') {
        document.querySelector('.city img').src = "images/Winter.jpg";
    } else if (op.weather[0].main == 'Clear') {
        document.querySelector('.city img').src = "images/Summer.jpg";
    } else if (op.weather[0].main == 'Rainy') {
        document.querySelector('.city img').src = "images/Rainy.jpg";
    } else{
        return;
    }
    
    if (Math.round(op.main.temp) <= 20) {
        document.querySelector('.left img').src = "https://cdn-icons-png.flaticon.com/512/7074/7074116.png";
    } else {
        document.querySelector('.left img').src = "https://cdn-icons-png.flaticon.com/512/3534/3534501.png";
    }
    
}

clickBut.addEventListener('click', () => {
    if (inputBox.value.trim() !== "") {
        document.querySelector('.message p').innerHTML = '';
        checkWeather(inputBox.value);
        inputBox.value = "";
    } else{
        document.querySelector('.message p').innerHTML = 'Please write something above.'
        // alert("Blank input");
    }
});

