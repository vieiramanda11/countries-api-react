import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchCountries: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
        this.props.setAlert('Please enter the country name', 'light');
    } else {
      this.props.searchCountries(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search countries"
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
}

export default Search;
