import baseRequest from './axiosBaseUrl'

export async function getWeatherByCity(city) {
    try {
        const response = await baseRequest.get('/weather', {
            params: {
                q: city, 
                appid: 'a1aac202a64668472fff5a3689bc4c61',
                units:'metric'
            }
        });

        const temp = Math.round(response.data.main.temp) 
        const temp_min = Math.round(response.data.main.temp_min) 
        const temp_max = Math.round(response.data.main.temp_max) 
        const feels_like = Math.round(response.data.main.feels_like) 
        const dataObject = [

            {
                temp: temp,
                temp_min: temp_min,
                temp_max: temp_max,
                feels_like: feels_like,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                wind_speed: response.data.wind.speed,
                wind_deg: response.data.wind.deg,
                name: response.data.weather[0].main,

            }

        ]
        return dataObject
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}




export async function getForecastByCity(city) {
    try {
        const response = await baseRequest.get('/forecast', {
            params: {
                q: city, 
                appid: 'a1aac202a64668472fff5a3689bc4c61',
                units:'metric'
            }
        });

    const today = new Date().toISOString().split('T')[0];

    const dataObject = [];
    let lastDateOnly;
    response.data.list.forEach(forecast => {

      const dateOnly = forecast.dt_txt.split(' ')[0]; 

      if(dateOnly != lastDateOnly && dateOnly != today){
        lastDateOnly = dateOnly
        dataObject.push({
            temp_min: forecast.main.temp_min,
            temp_max: forecast.main.temp_max,
            humidity: forecast.main.humidity,
            pressure: forecast.main.pressure,
            wind_speed: forecast.wind.speed,
            wind_deg: forecast.wind.deg, 
            name: forecast.weather[0].main,
            date: dateOnly

        })
      }
    });
  
    // const temp = Math.round(response.data.main.temp) 
    // const temp_min = Math.round(response.data.main.temp_min) 
    // const temp_max = Math.round(response.data.main.temp_max) 
    // const feels_like = Math.round(response.data.main.feels_like) 
    // dataObject = [

    //     {
    //         temp: temp,
    //         temp_min: temp_min,
    //         temp_max: temp_max,
    //         feels_like: feels_like,
    //         humidity: response.data.main.humidity,
    //         pressure: response.data.main.pressure,
    //         wind_speed: response.data.wind.speed,
    //         wind_deg: response.data.wind.deg,
    //         name: response.data.weather[0].main,

    //     }

    // ]
    return dataObject
    
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}
