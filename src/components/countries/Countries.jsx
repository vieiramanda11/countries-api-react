import React from "react";
import CountryItem from "./CountryItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {countries.map((country) => (
          <CountryItem key={country.alpha3Code} country={country} />
        ))}
      </div>
    );
  }
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Countries;
