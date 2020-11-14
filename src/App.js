import React, { useState, useEffect } from 'react'
import './App.css';
import {FormControl, MenuItem, Select, Card, CardContent} from "@material-ui/core"
import InfoBox from './InfoBox'
import Table from "./Table";

function App() {
const [country, setCountry] = useState('worldwide');
const [countryInfo, setCountryInfo] = useState({});
const [countries, setCountries] = useState([]);
const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  })

  useEffect(() => {
    const getCountriesData = async () => {
      fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json()) 
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
          }));
        
        setTableData(data);
        setCountries(countries);
      })
    };

    getCountriesData();
  }, []); 

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    

    const url = countryCode === "worldwide"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className='app_header'>
          <h1>COVID-19 TRACKER</h1>
          <FormControl className='app_dropdown'>
          <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app_stats">
          <InfoBox 
            title="Coronavirus cases" 
            cases={countryInfo.todayCases} 
            total={countryInfo.cases} 
          />

          <InfoBox 
            title="Recovered" 
            cases={countryInfo.todayRecovered} 
            total={countryInfo.recovered} 
          />

          <InfoBox 
            title="Deaths" 
            cases={countryInfo.todayDeaths} 
            total={countryInfo.deaths} 
          />
        </div>
      </div>

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide New Cases</h3>
          
          {/* Graph */}
        </CardContent>
      </Card>     
    </div>
  );
}

export default App;
