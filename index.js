let key = "a6aea4dc70c74a2a8f1125401230512"

let temp = document.querySelector("#currTemp");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#windSp");
let cond = document.querySelector("#condition");
let logo = document.querySelector("#logo") 
let inputBar = document.querySelector("#inputTag");
let searchBtn = document.querySelector("#search-addon");

searchBtn.addEventListener("click", function(){
    let city = inputBar.value;
    inputBar.value="";
    fetchData(city);
})

async function fetchData(city){
   let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
   let dataObj = await data.json();
   screenUpdate(dataObj)
   console.log(dataObj);
}
fetchData("london");
function screenUpdate(obj){
    let tempData = obj.current.temp_c;
    let cityData = obj.location.name;
    let humidData = obj.current.humidity;
    let windspeedData = obj.current.wind_kph;
    let iconData = obj.current.condition.icon ;
    let conditionData =  obj.current.condition.text;

    temp.innerHTML = tempData;
    city.innerHTML = cityData;
    humidity.innerHTML = humidData;
    windspeed.innerHTML = windspeedData;
    cond.innerHTML = conditionData;
    logo.setAttribute("src",iconData);
}