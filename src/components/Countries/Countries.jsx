import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries)

    
    // let [count, setCount] = useState(1);
    // const handleVisitedCountries =(country) => {
    //     console.log('countries clicked')
    //     setCount(count++)
    // }

    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries =(country) => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length} </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;