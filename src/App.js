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
          <h4>Find constituencies like yours to see what campaigns are working around the country...</h4>
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
        <Results props={this.state.results} />
      </div>
    )
  }
}

export default App
