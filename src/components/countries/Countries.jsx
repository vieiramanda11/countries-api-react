import React, { Component } from "react";
import CountryItem from "./CountryItem";

class Countries extends Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country) => (
          <CountryItem key={country.alpha3Code} country={country} />
        ))}
      </div>
    );
  }
}

export default Countries;
