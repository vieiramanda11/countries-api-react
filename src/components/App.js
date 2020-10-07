import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";
import Alert from "./layout/Alert";
import Country from "./countries/Country"; 

class App extends Component {
  state = {
    countries: [],
    country: [],
    countryCurrencies: {},
    countryLanguages: {},
    countryBorders: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data, loading: false });
  }

  searchCountries = async (name) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    this.setState({ countries: response.data, loading: false });
  };

  getCountry = async (country) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    this.setState({ country: response.data[0], loading: false });
  };

  getCountryCurrencies = async (country) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    this.setState({ countryCurrencies: response.data[0].currencies[0], loading: false });
  };

  getCountryLanguages = async (country) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    this.setState({ countryLanguages: response.data[0].languages[0], loading: false });
  };

  getCountryBorders = async (country) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    this.setState({ countryBorders: response.data[0].borders, loading: false });
    console.log(response.data[0].borders);
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchCountries={this.searchCountries}
                    setAlert={this.setAlert}
                  />
                  <Countries
                    loading={this.state.loading}
                    countries={this.state.countries}
                  />
                </Fragment>
              )}
            ></Route>
            <Route
              exact
              path="/:country"
              render={(props) => (
                <Country
                  {...props}
                  getCountry={this.getCountry}
                  getCountryCurrencies={this.getCountryCurrencies}
                  getCountryLanguages={this.getCountryLanguages}
                  getCountryBorders={this.getCountryBorders}
                  country={this.state.country}
                  countryCurrencies={this.state.countryCurrencies}
                  countryLanguages={this.state.countryLanguages}
                  countryBorders={this.state.countryBorders}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
