import React, { Component } from 'react'
import Select from 'react-select'
import anaylsis from './anaylsis.json'
import './app.css'
import Results from './Results.js';

var options = []
var nameToId = {}
Object.keys(anaylsis).sort().forEach(key => {
  options.push({ value: anaylsis[key].name, label: anaylsis[key].name })
  nameToId[anaylsis[key].name] = key
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

  getResults = constituencyName => {
    this.setState({
      results: anaylsis[nameToId[constituencyName]],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Campaign <br /> Connector</h1>
          <h4>Connect with constituencies like yours to see what campaigns are working around the country...</h4>
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
