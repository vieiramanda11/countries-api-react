import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Spinner from "../layout/Spinner";
import "../../styles/country.css";

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
      <div className="single-country">
        <div className="container-back">
          <Link to="/">
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
          </Link>
        </div>
        <div className="content-container">
          <img src={flag} alt="country flag" />
          <div className="container-second">
            <h2>{name}</h2>
            <div className="container-description">
              <div className="first-col">
                <p>
                  Native name: <span>{nativeName}</span>
                </p>
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>
                </p>
                <p>
                  Capital: <span>{capital}</span>
                </p>
              </div>
              <div className="second-col">
                <p>
                  SubRegion: <span>{subregion}</span>
                </p>
                <p>
                  Topleveldomain: <span>{topLevelDomain}</span>
                </p>
                <p>
                  Currencies: <span>{currency}</span>
                </p>
                <p>
                  Language: <span>{languages}</span>
                </p>
              </div>
            </div>
            <div className="country-borders">
              <p>Border countries:</p>
              {countryBorders.map((border) => (
                <Link
                  to={`/${border}`}
                  key={border}
                  countryborders={countryBorders}
                  className="country-border"
                >
                  <p>{border.toLowerCase()}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Country.propTypes = {
  getCountry: PropTypes.func.isRequired,
};

export default withRouter(Country);
