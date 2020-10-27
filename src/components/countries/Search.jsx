import React, { useState } from "react";
import PropTypes from "prop-types";

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
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search countries"
            value={text}
            onChange={onChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }

Search.propTypes = {
  searchCountries: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
