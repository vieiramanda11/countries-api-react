import React, { useState } from "react";

const Filter = ({ searchRegion }) => {
    const [region, setRegion] = useState('');

    const handleChange = (event) => {
        setRegion(event.target.value.toLowerCase())
        searchRegion(event.target.value.toLowerCase())
    }
  return (
    <div>
      <select className="filter-select" value={region} onChange={handleChange}>
        <option value="" disabled selected hidden>Search by Region</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
