import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Countries from "../components/countries/Countries";
import axios from "axios";
import Search from "./countries/Search";
import Alert from "./layout/Alert";
import Country from "./countries/Country";
import Filter from "./countries/Filter";

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
    console.log(response.data)
    setLoading(false);
  };

  const getCountry = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${country}`
    );
    setCountry(response.data);
    setLoading(false);
  };

  const getCountryCurrencies = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${country}`
    );
    setCountryCurrencies(response.data.currencies[0]);
    setLoading(false);
  };

  const getCountryLanguages = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${country}`
    );
    setCountryLanguages(response.data.languages[0]);
    setLoading(false);
  };

  const getCountryBorders = async (country) => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${country}`
    );
    setCountryBorders(response.data.borders);
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
            key={country}
            render={() => (
              <Fragment>
                <Search
                  searchCountries={searchCountries}
                  showAlert={showAlert}
                />
                <Filter searchRegion={searchRegion} countries={countries} />
                <Countries loading={loading} countries={countries} />
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
                loading={loading}
              />
            )}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
