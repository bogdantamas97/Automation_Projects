import React from 'react';
import { jssPreset, StylesProvider, makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';

import Led from '../utils/Led';

import Pump from '../utils/Pump';
import LevelSensor from '../sensors/LevelSensor';

const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins],
});

const useStyles = makeStyles({
    root: `
    background: linear-gradient(45deg, #21CBF3 30%, blue 90%);
      font-size: 32px;
      border: 0;
      color: white;
      height: 60px;
      text-align: center;
      box-shadow: 0 5px 5px 2px rgba(255, 105, 135, 0.3);
    `,
  });


const MainTitle= () => {
    const classes = useStyles();
    return(
    <h2 className={classes.root}>Water</h2>
    );
}

const Water = () => {
    return (
        <React.Fragment>
            <StylesProvider jss={jss}>
                    <MainTitle />
            </StylesProvider>
            <LevelSensor/>
            <Pump/>
            <Led/>
        </React.Fragment>
    );
};

export default Water;