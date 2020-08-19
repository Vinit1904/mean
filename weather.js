window.addEventListener("load", () => {

    let cityName = document.querySelector("#cityname").value || "pune";
    console.log(cityName);


    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=c26b82a9f3a7a2bb5e3f0ce56a98f1dd&units=metric&q=" + cityName;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        //console.log(refjson);
        domOperationHere(refjson);
    };

    xhr.send();
});




let getWeather = () => {
    // CITY NAME IS HARD CODED

    let cityName = document.querySelector("#cityname").value || "pune";
    console.log(cityName);


    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=c26b82a9f3a7a2bb5e3f0ce56a98f1dd&units=metric&q=" + cityName;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        //console.log(refjson);
        domOperationHere(refjson);
    };

    xhr.send();
};


let domOperationHere = (refjson) => {

    const maindesc = refjson.main.temp;
    let cityName = document.querySelector("#cityname").value
    //console.log(refjson.weather[0].description);

    const feels_like = refjson.main.feels_like;
    const temp_min = refjson.main.temp_min;
    const temp_max = refjson.main.temp_max;
    const pressure = refjson.main.pressure;
    const humidity = refjson.main.humidity;
    const wind_speed = refjson.wind.speed;
    const rain = refjson.weather[0].description;
    const cloud_cover = refjson.clouds.all;
    const visibile = refjson.visibility;

    const desc = refjson.weather[0].description;

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    document.querySelector("#time").children[0].innerHTML = h + ":" + m + ":" + s;

    console.log(h + ":" + m + ":" + s);





    //const name = refjson.name;
    //const maxTemp = refjson.main.temp_max;
    //const 


    let iconq = document.querySelector("#icon").children[0];
    iconq.innerHTML = cityName.toUpperCase();


    let tempq = document.querySelector("#temp").children[0];
    tempq.innerHTML = maindesc + "<sup>o</sup>";

    let descq = document.querySelector("#desc").children[0];
    descq.innerHTML = desc.toUpperCase();

    let feel_likeq = document.querySelector("#wdata").children[0].children[0];
    feel_likeq.innerHTML = feels_like + "<sup>o</sup>";

    let temp_minq = document.querySelector("#wdata").children[1].children[0];
    temp_minq.innerHTML = temp_min + "<sup>o</sup>";

    let temp_maxq = document.querySelector("#wdata").children[2].children[0];
    temp_maxq.innerHTML = temp_max + "<sup>o</sup>";

    let pressureq = document.querySelector("#wdata").children[3].children[0];
    pressureq.innerHTML = pressure + "mbar";

    let humidityq = document.querySelector("#wdata").children[4].children[0];
    humidityq.innerHTML = humidity + "%";

    let wind_speedq = document.querySelector("#wdata").children[5].children[0];
    wind_speedq.innerHTML = wind_speed + " km/hr";

    let rainq = document.querySelector("#wdata").children[6].children[0];
    rainq.innerHTML = rain.toUpperCase();

    let cloud_coverq = document.querySelector("#wdata").children[7].children[0];
    cloud_coverq.innerHTML = cloud_cover + "%";

    let visibileq = document.querySelector("#wdata").children[8].children[0];
    visibileq.innerHTML = visibile + " m";
    //document.querySelector("#textid").value = "";
};