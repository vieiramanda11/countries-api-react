import React, { Component } from "react";
import "./App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";
import Alert from './layout/Alert';

class App extends Component {
  state = {
    countries: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data, loading: false });
  }

  searchCountries = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${text}`
    );
    this.setState({ countries: response.data, loading: false });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <Alert alert={this.state.alert}/>
        <Search searchCountries={this.searchCountries} setAlert={this.setAlert}/>
        <Countries
          loading={this.state.loading}
          countries={this.state.countries}
        />
      </div>
    );
  }
}

export default App;
