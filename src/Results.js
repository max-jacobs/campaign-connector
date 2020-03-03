import React, { Component } from 'react'
import './app.css'
import Button from '@material-ui/core/Button';

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      results: props.results,
      resultSelection: props.resultSelection,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      results: props.results
    }
  }

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
    // let info
    if (this.state.results != null) {
      results = this.state.results.results.map(function (item, idx) {
        return getResultCard(idx, item.name, item.similarity)
      })
      // info = <p> Showing info for {this.state.resultSelection}</p>;
    }
    return <div> {results} </div>
  }
}

function getResultCard(idx, name, similarity) {
  return (
    <div key={idx} className="mdc-card mdc-card--outlined">
      <div className="App-result">
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
      </div>
    </div>
  )
}

export default Results
