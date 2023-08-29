import { createContext, useState } from "react";
import { getWeatherData } from "../compnents/Service";


export const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState({});
    const [search, setSearch] = useState("");
    
    const [units, setUnits] = useState()

    async function fetchWeather() {
       
        try {
            const data = await getWeatherData(search , units);
            if (data) {
                setQuery(data);
            }
        } catch (error) {
            console.log("Error fetching weather", error);
        }

    }

    return <SearchContext.Provider value={{ search, query, units, fetchWeather, setUnits, setQuery, setSearch }}>
        {children}
    </SearchContext.Provider>
}