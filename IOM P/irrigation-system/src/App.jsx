import React from "react";
import Split from "react-split";

import { makeStyles } from '@material-ui/core/styles';

import Ground from './components/Ground';
import Meteo from './components/Meteo';
import Water from './components/Water';

const useStyles = makeStyles(theme => ({
  wrap: {
    display: 'flex'
  }
}));

const App = () => { 
  const classes = useStyles();
  return (

    <div>
      <Split className={classes.wrap} sizes={[33, 33, 33]}>
          <div> <Meteo /></div> 
          <div> <Ground /></div> 
          <div> <Water /></div> 
        
      </Split>
    </div>
  )
}

export default App;