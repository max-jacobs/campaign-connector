import React from 'react'
import './app.css'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '2px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '80%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function getResultCard(idx, name, similarity, classes) {
  return (
    <div className={classes.root} id={idx}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
          <Typography className={classes.secondaryHeading}>{similarity}%</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Info about campaigns <br />
            Contact links
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default function Results(props) {
  const classes = useStyles();
  let results
  if (props.props != null) {
    let orderedProps = props.props.results.sort(function (a, b) {
      if ( a.similarity > b.similarity ){
        return -1
      }
      return 1
    });
    results = orderedProps.map(function (item, idx) {
      return getResultCard(idx, item.name, item.similarity, classes)
    })
  }
  return <div className="App-results"> {results} </div>

}
