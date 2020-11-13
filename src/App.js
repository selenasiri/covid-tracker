import { FormControl } from '@material-ui/core';
import './App.css';
import { useState } from 'react'
import {MenuItem, Select} from "@material-ui/core"

function App() {
const [countries, setCountries] = useState([
  'USA', 'UK', 'India'
]);

// State = how to write a variable in React
// https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries

  return (
    <div className="app">
      <div className='app_header'>
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app_dropdown'>
          <Select variant='outlined' value='abc'>
            {/* Loop through all countries, then show a drop down list of the options */}

            {
              countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}

      {/* Map */}
    </div>
  );
}

export default App;
