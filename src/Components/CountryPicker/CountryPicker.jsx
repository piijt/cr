import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]);


  return(
    <div className={styles.bgColor}>
    <FormControl className={styles.formControl}>
      <NativeSelect style={{color: "#f1f1f1"}} className={styles.formControl} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option style={{color: "#333"}} key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  </div>
  )
}

export default CountryPicker;
