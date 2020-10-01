import React from "react";
import PropTypes from "prop-types";

const CountryItem = ({
  country: { alpha3Code, name, population, region, capital },
}) => {
  const countryCode = alpha3Code.toLowerCase();
  return (
    <div>
      <img
        src={`https://restcountries.eu/data/${countryCode}.svg`}
        style={{ width: "100px", height: "50px" }}
        alt="country flag"
      />
      <h5>Name: {name}</h5>
      <h5>Population: {population}</h5>
      <h5>Region: {region}</h5>
      <h5>Capital: {capital}</h5>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
