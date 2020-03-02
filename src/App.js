import React, { Component } from 'react'
import Select from 'react-select'
import constituenciesFile from './constituencies.js'
import axios from 'axios';
import './app.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
    this.handleClick = this.handleClick.bind(this);
    this.getResults = this.getResults.bind(this);
    this.state = {
      dropDownSelection: null,
      results: null,
      resultSelection: null,
    };
  }

  handleChange = select => {
    if (select != null) {
      this.setState({
        dropDownSelection: select.value
      });
      this.getResults(select.value)
    }
  };

  getResults = constituency => {
    axios.post(
      'https://constituency-comparator.herokuapp.com/search', { "id": idMap[constituency] },
    )
      .then((response) => {
        this.setState({
          results: response.data,
          resultSelection: response.data.results[0].name
        });
      }, (error) => {
        this.setState({
          results: null,
          resultSelection: null
        });
      });
  };

  handleClick = resultSelection => {
    if (resultSelection != null) {
      this.setState({
        resultSelection: resultSelection
      });
    }
  };

  render() {
    var onClick = this.handleClick;
    let results
    let info
    if (this.state.results != null) {
      results = this.state.results.results.map(function (item, idx) {
        // return <p key={idx} className="App-result" onClick={() => onClick(item.name)}> {item.name}, score: {item.similarity}%</p>;
        return getResultCard(idx, item.name, item.similarity)
      })
      info = <p> Showing info for {this.state.resultSelection}</p>;
    }
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
          {results}
        </div>
        <div className="App-info">
          {info}
        </div>
      </div>
    )
  }
}

function getResultCard(idx, name, similarity) {
  return (
    <Card key={idx} className="App-result">
      <div className="App-result-table">
        <div className="App-result-column-1">
          <p className="App-result-title">{name}</p>
          <p className="App-result-score">Match: {similarity}%</p>
        </div>
        <div className="App-result-column-2">
          <div className="App-result-button">
            <Button className="Button">info</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default App
