var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var feels = document.querySelector('#feels');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=5758efc0e1d2abc671b98f9ca7e7fae9')
.then(response => response.json())
.then(data => {
    console.log(data);
  var tempValue = data['main']['temp'];
  var feels_like = data['main']['feels_like'];

  var nameValue = data['name'];
  var country = data['sys']['country'];
  var descValue = data['weather'][0]['description'];
  main.innerHTML = nameValue+","+country;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = tempValue+"°C";
  feels.innerHTML = "Feels Like-"+feels_like+"°C";
  document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?climate,"+descValue+")";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
