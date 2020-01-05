import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: 20,
      textAlign: 'center',
    }
});

const PumpLed = () =>{

  const [isOn, setOn] = React.useState(false);
  return (
      <Switch
      checked={isOn}
      onChange={() => setOn(!isOn)}
      value={isOn}
      inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
  )
}

const Pump = () => {

    const classes = useStyles();
    return (
     <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
              Pump
          </Typography>
          <PumpLed/>
        </CardContent>
      </Card>
    );
};

export default Pump;