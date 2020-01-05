

import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import '../utils/style/SwitchButton.css';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: 20,
      textAlign: 'center',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Led = () => {

    const classes = useStyles();
    const [isOn, setOn] = React.useState(false);

        
    return (
     <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
              Led
          </Typography>
          <input class="light" type="checkbox" onClick={() => setOn(!isOn)}/>
          
        </CardContent>
      </Card>
    );
};

export default Led;

