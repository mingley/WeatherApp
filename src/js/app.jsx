import React from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import SearchHistory from '../components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather App</h1>
        </div>
          <SearchBar />
        <div className='row'>
          <div className='col-8 col-md-6 mb-4'>
            <WeatherDisplay />
          </div>
          <div className='col-4 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}