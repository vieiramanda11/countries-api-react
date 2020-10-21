import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";
import Alert from "./layout/Alert";
import Country from "./countries/Country";

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
    console.log('data', response.data)
  };

  useEffect(() => {
    allCountries();
  },[])

  const searchCountries = async (name) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    setCountries(response.data);
    setLoading(false);
  };

  const getCountry = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    setCountry(response.data[0]);
    setLoading(false);
  };

  const getCountryCurrencies = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    setCountryCurrencies(response.data[0].currencies[0]);
    setLoading(false);
  };

  const getCountryLanguages = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    setCountryLanguages(response.data[0].languages[0]);
    setLoading(false);
  };

  const getCountryBorders = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    setCountryBorders(response.data[0].borders);
    setLoading(false);
  };

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Search
                  searchCountries={searchCountries}
                  showAlert={showAlert}
                />
                <Countries
                  loading={loading}
                  countries={countries}
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
                getCountry={getCountry}
                getCountryCurrencies={getCountryCurrencies}
                getCountryLanguages={getCountryLanguages}
                getCountryBorders={getCountryBorders}
                country={country}
                countryCurrencies={countryCurrencies}
                countryLanguages={countryLanguages}
                countryBorders={countryBorders}
              />
            )}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
