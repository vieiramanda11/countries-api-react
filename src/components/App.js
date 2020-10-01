import React, { Component } from "react";
import "./App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";

class App extends Component {
  state = {
    countries: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Countries loading={this.state.loading} countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
