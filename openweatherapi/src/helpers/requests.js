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
        const dataObject = [
            {temp: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure}

        ]
        return dataObject
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}