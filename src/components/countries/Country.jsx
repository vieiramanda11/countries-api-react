import React, { Component } from "react";

class Country extends Component {
  componentDidMount() {
    this.props.getCountry(this.props.match.params.country);
  }
  render() {
    const { name, nativeName, flag, population, region, capital, subregion, topLevelDomain, currencies, languages, borders } = this.props.country;
    
    return (
      <div>
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
        {/* <h5>Currencies: {currencies}</h5> */}
        {/* <h5>Languages: {languages}</h5>
        <h5>Border Countries: {borders}</h5> */}
      </div>
    );
  }
}

export default Country;
