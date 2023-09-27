let lon;
let lat;
let temperatura = document. querySelector('.temp');
let summery = document. querySelector('.summary');
let loc = document. querySelector('.location');
let icon = document. querySelector('.icon');
const kelvin = 273.15;



window.addEventListener("load",()=>{


if (navigator.geolocation){


    navigator.geolocation.getCurrentPosition((position) =>{


        console.log(position);
        lon= position.coords.longitude;
        lat= position.coords.latitude;

    
     const api_id = "58925a142dbe2b55e87e88df08d01d25";

    const url_base = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={6565d3f23d6aa4cf40e475d7943ee95b}';

        fetch(url_base)
        .then((response)=>{

        console.log("RESPUESTA JSON");
        
        return Response.json();

        })

        .then((data)=>{

          console.log("ESTA ES LA DATA");
         
          console.log(data);
         
          temperatura.textContent =
        Math.floor(data.main.temp - kelvin) + "°c";
        summery.textContent = data.weather[0].description
        loc.textContent= data.name + "," + data.sys.country
            
        }
        
        );




        

        
        
    }
    
        )


    }

    
}
)
