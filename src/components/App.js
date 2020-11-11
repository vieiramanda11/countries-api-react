import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";
import Alert from "./layout/Alert";
import Country from "./countries/Country";
import Filter from "./countries/Filter";
import Header from "./layout/Header";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryCurrencies, setCountryCurrencies] = useState({});
  const [countryLanguages, setCountryLanguages] = useState({});
  const [countryBorders, setCountryBorders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const allCountries = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    setCountries(response.data);
    setLoading(false);
  };

  useEffect(() => {
    allCountries();
  }, []);

  const searchCountries = async (name) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    setCountries(response.data);
    setLoading(false);
  };

  const searchRegion = async (region) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    setCountries(response.data);
    console.log(response.data);
    setLoading(false);
  };

  const getCountry = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${country}`
    );
    setCountry(response.data);
    setCountryCurrencies(response.data.currencies[0]);
    setCountryBorders(response.data.borders);
    setCountryLanguages(response.data.languages[0]);
    setLoading(false);
  };

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
      <div className="body-app">
        <BrowserRouter>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              key={country}
              render={() => (
                <div>
                  <Search
                    searchCountries={searchCountries}
                    showAlert={showAlert}
                  />
                  <Filter searchRegion={searchRegion} countries={countries} />
                  <Countries loading={loading} countries={countries} />
                </div>
              )}
            ></Route>
            <Route
              path="/:country"
              render={(props) => (
                <Country
                  {...props}
                  key={props.match.params.country}
                  getCountry={getCountry}
                  country={country}
                  countryCurrencies={countryCurrencies}
                  countryLanguages={countryLanguages}
                  countryBorders={countryBorders}
                  loading={loading}
                />
              )}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
