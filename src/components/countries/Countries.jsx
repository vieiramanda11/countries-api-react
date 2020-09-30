import React, { Component } from "react";
import CountryItem from "./CountryItem";

class Countries extends Component {
  state = {
    countries: [
      {
        id: "1",
        flag: "image",
        name: "Brazil",
        population: 206135893,
        region: "Americas",
        capital: "Brasilia",
      },
      {
        id: "2",
        flag: "image",
        name: "England",
        population: 206135893,
        region: "Europe",
        capital: "London",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
      </div>
    );
  }
}

export default Countries;
