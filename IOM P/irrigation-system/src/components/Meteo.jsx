import React from 'react';
import { jssPreset, StylesProvider, makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';

import AirHumiditySensor from '../sensors/AirHumiditySensor';
import TemperatureSensor from '../sensors/TemperatureSensor';

const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins],
});

const useStyles = makeStyles({
    root: `
      background: linear-gradient(45deg, red 30%, green 90%);
      border-radius: 3px;
      font-size: 32px;
      border: 0;
      color: white;
      height: 60px;
      padding: 0 30px;
      text-align: center;
      box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    `,
  });


const MainTitle= () => {
    const classes = useStyles();
    return(
    <h2 className={classes.root}>Meteo</h2>
    );
}

const Meteo = () => {
    return (
        <React.Fragment>
            <StylesProvider jss={jss}>
                    <MainTitle />
            </StylesProvider>
            <AirHumiditySensor/>
            <TemperatureSensor/>
        </React.Fragment>
    );
};

export default Meteo;