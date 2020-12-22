const key = ',us&appid=ce62966fa4ec5941f43072a50bb4bebc';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
//    fetch('http://localhost:8081/test')
    getWeather(baseUrl, "91302", key)    
    .then(function(data) {
        const kelvin = data.main.temp;
        let degF =(( kelvin - 273.15) * 9/5) + 32;
        degF = Math.trunc(degF);

        document.getElementById('results').innerHTML = degF
    })
}

const getWeather = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+key)
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}

export { handleSubmit }
