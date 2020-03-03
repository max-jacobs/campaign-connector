import React, { Component } from 'react'
import Select from 'react-select'
import constituenciesFile from './constituencies.js'
import axios from 'axios';
import './app.css'
import Button from '@material-ui/core/Button';
import Results from './Results.js';

var options = []
var idMap = {}
Object.keys(constituenciesFile.constituencies).sort().forEach(key => {
  options.push({ value: key, label: key })
  idMap[key] = constituenciesFile.constituencies[key]
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getResults = this.getResults.bind(this);
    this.state = {
      dropDownSelection: null,
      results: null,
    };
  }

  handleChange = select => {
    if (select != null) {
      this.setState({
        dropDownSelection: select.value
      });
      this.getResults(select.value)
    } else {
      this.setState({
        dropDownSelection: null,
        results: null,
      });
    }
  };

  getResults = constituency => {
    axios.post(
      'https://constituency-comparator.herokuapp.com/search', { "id": idMap[constituency] },
    )
      .then((response) => {
        this.setState({
          results: response.data,
          // resultSelection: response.data.results[0].name
        });
      }, (error) => {
        this.setState({
          results: null,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Campaign <br /> Comparator</h1>
          <h4>Select your constituency to see what's working for others around the country...</h4>
        </header>
        <div className="App-select">
          <Select
            placeholder="Select your constituency"
            options={options}
            isClearable="true"
            isSearchable="true"
            onChange={this.handleChange}
          />
        </div>
        <div className="App-results">
          <Results results={this.state.results} />
        </div>
      </div>
    )
  }
}

export default App
