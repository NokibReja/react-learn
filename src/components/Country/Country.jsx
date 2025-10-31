import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country)

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // setVisited(true)
        // setVisited(visited? false : true)
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && ' country-visited'}`}>
            <img src={country?.flags?.flags.png} alt={country.flags.flags.alt} />

            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital}</h3>
            <p>Region: {country.region.region}</p>
            <p>Languages: {Object.values(country.languages.languages).join(', ')}</p>
            <p>Population: {country.population.population}</p>

            <p>Area: {country.area.area}  km<sup>2</sup> {
                country.area.area > 300000 ? ' Big Country' : ' Small Country'
            } </p>

            <button onClick={() => {
                handleVisitedCountries(country)
                handleVisited()
            }}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;