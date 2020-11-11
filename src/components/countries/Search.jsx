import React, { useState } from "react";
import PropTypes from "prop-types";
import '../../styles/search.css'

const Search = ({ searchCountries, showAlert }) => {
  const [text, setText] = useState('');
   
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
        showAlert('Please enter the country name', 'light');
    } else {
      searchCountries(text);
      setText('')
    }
  };

    return (
      <div>
        <form onSubmit={onSubmit} className="form-search">
          <input
            type="text"
            name="text"
            placeholder="Search for a country..."
            value={text}
            onChange={onChange}
            className="input-search"
          ></input>
          <button type="submit" value="Search" className="search-button"><i className="fas fa-search"></i></button>
        </form>
      </div>
    );
  }

Search.propTypes = {
  searchCountries: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
