import React, { useState, useEffect } from "react";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem, Select } from "@material-ui/core";

function App() {
  const [contries, setContries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        const info = data.map((item) => ({
          name: item.country,
          value: item.countryInfo.iso2,
        }));
        setContries(info);
      });
  };

  useEffect(() => {
    getCountriesData();
  }, []);
  // console.log(contries);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    // console.log(e.target.value);
    setCountry(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select onChange={onCountryChange} variant="filled" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {contries &&
              contries.map((country, index) => (
                <MenuItem key={index} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
