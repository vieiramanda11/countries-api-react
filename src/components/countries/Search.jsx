import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.text);
  }

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
