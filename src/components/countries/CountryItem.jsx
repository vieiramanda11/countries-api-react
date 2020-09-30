import React from "react";
import PropTypes from 'prop-types';

const CountryItem = ({ country: { alpha2Code, name, population, region, capital }}) => {
  return (
    <div>
      <h5>ID: {alpha2Code}</h5>
      <h5>Name: {name}</h5>
      <h5>Population: {population}</h5>
      <h5>Region: {region}</h5>
      <h5>Capital: {capital}</h5>
    </div>
  );
};

CountryItem.propTypes = {
    country: PropTypes.object.isRequired,
}

export default CountryItem;
