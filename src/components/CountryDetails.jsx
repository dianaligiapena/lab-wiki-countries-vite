import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function CountryDetails ( {countries} ) {
  const { alpha3Code } = useParams();

  // MAT:
  // const navigate = useNavigate();

  // const [country, setCountry] = useState(countries.filter(country => country.alpha3Code === alpha3Code )[0]);
  //   useEffect( () => {
  //     if ( typeof country === 'undefined' ) {
  //       navigate('/');
  //     }
  //   }, [country]); //fara navigate dupa country
    // de aici e ca ieri
        

  const details = countries.filter( (country) => 
     country.alpha3Code === alpha3Code )[0];

  const { name, capital, area, borders, alpha2Code } = details;

  return (
    <div className="col-7">
      <h1>{name.common}</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={`${name} flag`} />

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                { borders.map(border => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  )
                })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;