import React, { Component } from 'react'

class CountryItem extends Component {
    render() {
        const { id, flag, name, population, region, capital } = this.props.country;
        return (
            <div>
                <h5>ID: {id}</h5>
                <h5>Flag: {flag}</h5>
                <h5>Name: {name}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>Capital: {capital}</h5>
            </div>
        )
    }
}

export default CountryItem
