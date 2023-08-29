import { DateTime } from "luxon";
import axios from "axios";


const API_KEY = "63bbbae14f848b2e9f24d533cb77c006";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

{/*NEW URL create  */ }
export const getWeatherData = async (search, units) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${search}&units=${units}&appid=${API_KEY}`);
        const data = response.data;
        return FormatWeatherData(data);
    } catch (error) {
        console.log("Error requesting data", error);
    }
};

{/*Filtering usable info */ }
const FormatWeatherData = (data) => {
    const
        {
            coord: { lat, lon },
            main: { temp, feels_like, temp_min, temp_max, humidity },
            name,
            dt,
            sys: { country, sunrise, sunset },
            weather,
            wind: { speed }
        } = data

    const { main: detail, icon } = weather[0];

    return {
        lat, lon, temp, name, dt, feels_like, temp_min,
        temp_max, humidity, country, sunrise, sunset, detail, icon, speed
    }
}

// const getFormatedData = async (search, units) => {
//     return FormatWeatherData(await getWeatherData(search, units));
// }

{/* Format LOCAL TIME */ }

const LocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a ") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

{/* Format Icon URl*/ }
const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export { LocalTime, iconUrl };