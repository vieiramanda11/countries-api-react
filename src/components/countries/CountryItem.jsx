import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/countryItem.css";

const CountryItem = ({
  country: { name, population, region, capital, flag, alpha3Code },
}) => {
  return (
    <Link to={`/${alpha3Code}`} className="card-container">
      <div className="card">
        <img src={flag} alt="country flag" />
        <div className="content-card">
          <h5>{name}</h5>
          <p>
            Population: <span className="card-details">{population}</span>
          </p>
          <p>
            Region: <span className="card-details">{region}</span>
          </p>
          <p>
            Capital: <span className="card-details">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
