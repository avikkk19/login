const content = document.querySelector(".content");
const selcity = document.querySelector(".selcity");
const resultone = document.querySelector(".resultone");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const errordisplay = document.querySelector(".errordisplay");
const apikey="8762e53131c2316a38aff49622941f62";

// https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apikey}&units=metric

let data2= ""


async function getweather(){
try {
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selcity.value}&appid=${apikey}&units=metric`)
    let data =await result.json();
    data2=data
    console.log(data);
      resultone.innerHTML = `<h2> city: ${data.name} </h2>
      <h2 class="pp"> windspped :${data.wind.speed} </h2>
      <h2> temepature : ${data.main.temp} C </h2>`
} catch (error) {
    errordisplay.innerHTML= `message : ${data2?.message}`

}
  
}

btn.addEventListener("click",()=>{
    if(selcity.value){
          getweather();
    }
    else{
        errordisplay.innerHTML= `message : please Enter a City`

    }
  

});




