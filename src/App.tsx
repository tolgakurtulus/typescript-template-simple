import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import { CountryType } from "./types";

function App() {
    const [countries, setCountries] = useState<CountryType[]>([])

    const getCountries = async () => {
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all")
            console.log("data:", data)
            setCountries(data);
        } catch (error) {
            console.log("error", error)
        } 
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div>
            {countries.map(country => {
                return (
                    <Country key={country.area} country={country} />
                )
            })}

        </div>
    )
}

export default App;
