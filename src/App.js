import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { Typography } from '@material-ui/core';

import { fetchData } from './api/'; // auto go to index.js

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData(this.state.country);
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Typography variant="h5">
                    Visualized from awesome API in
                    <a href="https://covid19.mathdro.id/api/"> Mathdro API </a>
                </Typography>  
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;