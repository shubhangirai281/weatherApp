window.addEventListener('load', ()=>{
    let long;
    let lat;
    let key;
    let tempdegree = document.querySelector(".temp-degree"); 
    let loctime = document.querySelector(".loc-time"); 
    let desc= document.querySelector(".temp-desc"); 
    let i= document.querySelector(".icon-app"); 
    let degree = document.querySelector(".degree");
    const degreeSpan = document.querySelector(".degree span");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( postition => {
            
                long= postition.coords.longitude;        
                lat= postition.coords.latitude;
                key= '7b9117d8ebf032cee9b48e31794396c3'; 
                // const api= `https://api.openweathermap.org/data/2.5/weather?lat=25.16&lon=82.5&appid=${key}&units=metric`
                const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
        
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const {temp}= data.main;
            const {description, icon}= data.weather[0];
            const n = data.name;
            var iconurl = "http://openweathermap.org/img/w/" + icon+ ".png";
            

            tempdegree.textContent = temp;
            desc.textContent = description;
            i.src =  iconurl
            // i.innerHTML = iconurl
            loctime.textContent = n;
            let F = ((9/5)*temp) + 32;
            degree.addEventListener('click',()=>{
                if(degreeSpan.textContent === 'C'){
                    degreeSpan.textContent= 'F';
                    tempdegree.textContent= F;
                }
                else{
                    degreeSpan.textContent= 'C';
                    tempdegree.textContent= temp;
                }
            }); 
        }); 

    });
    }

});