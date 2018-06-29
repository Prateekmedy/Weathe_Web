$(document).ready(function() {

  if(navigator.geolocation){
  	
    navigator.geolocation.getCurrentPosition(function(position){
      var lon = position.coords.longitude;
      var lat = position.coords.latitude;
    
      
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=3486226b818cafc17cad2867b3a4f793',function(data){

        var cel = data.main.temp;
        var fer = ((cel*9/5) + 32).toFixed(2);
       	var city = data.name;
       	var climateMain = data.weather[0].main;
       	var climateDesc = data.weather[0].description;
       	var pressure = data.main.pressure;
       	var humidity = data.main.humidity;
       	var wind = data.wind.speed;
       	var country = data.sys.country;
       	var iconCode = data.weather[0].icon;


       	$('#weather').html(climateMain);//for header

       	$('#city').html(city+", "+country);//for city

       //for temprature
        $('#temp').html(cel+" &#176 C");

        $('#tempBlock').click(function(){

          var splitter  = document.getElementById('temp').innerHTML;
          var camp = splitter.split(" ");
          
        	
        if(camp[0]==cel){
            $('#temp').html(fer+" &#176 F");
          }else{
            $('#temp').html(cel+" &#176 C");
          }
        });

        $('#climateDesc').html(climateDesc);//for climate Description

        document.getElementById('icon').src = 'http://openweathermap.org/img/w/'+iconCode+'.png' //for icon

        //for other climatic things
        $('#pressure').html("Pressure : "+pressure+" mb");
        $('#humidity').html("Humidity : "+humidity+"%");
        $('#wind').html("Wind Speed : "+wind+"mph");


        //for changing the background

        if(iconCode==='01d'||iconCode==='01n'){
        	document.getElementById('back').style.backgroundImage = "url('images/clear sky.jpg')";
        }else if(iconCode==='02d'||iconCode==='02n'){
        	document.getElementById('back').style.backgroundImage = "url('images/few cloud.jpg')";
        } else if(iconCode==='03d'||iconCode==='03n'){
        	document.getElementById('back').style.backgroundImage = "url('images/scatterd cloud.jpg')";
        }else if(iconCode==='04d'||iconCode==='04n'){
			document.getElementById('back').style.backgroundImage = "url('images/broken cloud.jpg')";
        }else if(iconCode==='09d'||iconCode==='09n'){
        	document.getElementById('back').style.backgroundImage = "url('images/showering rain.jpg')";
        }else if(iconCode==='10d'||iconCode==='10n'){
        	document.getElementById('back').style.backgroundImage = "url('images/rain.jpg')";
        }else if(iconCode==='11d'||iconCode==='11n'){
        	document.getElementById('back').style.backgroundImage = "url('images/strom.jpg')";
        }else if(iconCode==='13d'||iconCode==='13n'){
        	document.getElementById('back').style.backgroundImage = "url('images/snow.jpg')";
        }else if(iconCode==='50d'||iconCode==='50n'){
        	document.getElementById('back').style.backgroundImage = "url('images/mist.jpg')";
        } 

        
});
  });
  }
  
});