import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList( { countries} ) {

  return (
    <div className="col-5"  >
        <h1>CountriesList</h1>

        <ul>
        {countries.map( (country) => {
            return (
                <li key={country.alpha3Code} className="list-group-item list-group-item-action" >
                    <Link to={'/' + country.alpha3Code} >
                        {country.name.common}
                    </Link>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name} flag`}  style= {{width:20}} />
                </li>
            )    

            } 
        )  } 
      </ul>


    </div>
  );
}

export default CountriesList