const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "eaa80205644f084c10d48006e15aee1a";


const searcInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function(){
    let searchTerm = searcInput.value;
    sendRequest(searchTerm);
    searcInput.value ="";
})

searcInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        let searchTerm = searcInput.value;
        sendRequest(searchTerm);
        searcInput.value = "";
    }
})


const sendRequest = (newCity) => {
    let query = `${url}${newCity}&appid=${apiKey}&units=metric&lang=tr`

    fetch(query)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        const city = document.querySelector("#city");
        city.innerHTML = `${data.name},${data.sys.country}`

        const temp = document.querySelector("#temp");
        temp.innerHTML = `${(data.main.temp).toFixed(0)}°C`

        const desc = document.querySelector("#desc");
        desc.innerHTML = `${(data.weather[0].description).toUpperCase()}`

        const minmax = document.querySelector("#minmax");
        minmax.innerHTML = `${(data.main.temp_min).toFixed(0)}°C / ${(data.main.temp_max).toFixed(0)}°C`
    })
}