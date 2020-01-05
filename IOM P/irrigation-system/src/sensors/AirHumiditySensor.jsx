import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const apiBaseUrl = "http://localhost:8000";

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: 20,
      textAlign: 'center',
    }
});

const AirHumiditySensor = () => {

    const classes = useStyles();

    const [data, setData] = React.useState("");

    axios.get(apiBaseUrl)
    .then((response)=> {
        console.log(response);
    })
    .catch(() => {
        console.log('Unknown error');
    });

    return (
     <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
              AirHumidity Sensor
          </Typography>
          <Typography variant="body2" component="p">
              {data}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default AirHumiditySensor;