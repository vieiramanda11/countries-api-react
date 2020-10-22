import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Spinner from "../layout/Spinner";

const Country = ({
  country,
  getCountry,
  match,
  countryCurrencies,
  countryLanguages,
  countryBorders,
  loading,
}) => {
  useEffect(() => {
    getCountry(match.params.country);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    nativeName,
    flag,
    population,
    region,
    capital,
    subregion,
    topLevelDomain,
  } = country;
  const currency = countryCurrencies.name;
  const languages = countryLanguages.name;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div key={name}>
        <img
          src={flag}
          style={{ width: "100px", height: "50px" }}
          alt="country flag"
        />
        <h5>Name: {name}</h5>
        <h5>Native name: {nativeName}</h5>
        <h5>Population: {population}</h5>
        <h5>Region: {region}</h5>
        <h5>Capital: {capital}</h5>
        <h5>SubRegion: {subregion}</h5>
        <h5>Topleveldomain: {topLevelDomain}</h5>
        <h5>Currencies: {currency}</h5>
        <h5>Language: {languages}</h5>
        <div>
          {countryBorders.map((border) => (
            <Link
              to={`/${border}`}
              key={border}
              countryborders={countryBorders}
            >
              <h5>{border}</h5>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

Country.propTypes = {
  getCountry: PropTypes.func.isRequired,
};

export default withRouter(Country);
