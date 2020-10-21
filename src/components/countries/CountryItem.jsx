import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const CountryItem = ({
  country: { name, population, region, capital, flag, alpha3Code },
}) => {
  return (
    <Link to={`/${alpha3Code}`}>
    <div>
      <img
        src={flag}
        style={{ width: "100px", height: "50px" }}
        alt="country flag"
      />
      <h5>Name: {name}</h5>
      <h5>Population: {population}</h5>
      <h5>Region: {region}</h5>
      <h5>Capital: {capital}</h5>
    </div>
    </Link>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
