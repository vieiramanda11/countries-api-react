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
    console.log(response.data);
    console.log(this.state.country)
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
                  country={this.state.country}
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
