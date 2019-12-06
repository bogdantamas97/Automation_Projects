import React from "react";
import { getPositions } from '../utils/GetPositions';
import { AppBar, TextField, makeStyles } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        boxSizing: 'border-box',
    },
    root: {
        display: 'block',
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));


export const DeviceIdPage = () => {

    const classes = useStyles();

    const [text1,setText1] = React.useState("2015-01-01 23:00:00");
    const [text2,setText2] = React.useState("2018-01-02 23:00:00");

    return (
        <div>
        <MuiThemeProvider key={"theme"}>

            <TextField className={classes.textField} label="Start Date" style={style} defaultValue={text1} onChange={setText1}>{text1}</TextField>
            <TextField className={classes.textField} label="End Date" style={style} defaultValue={text2} onChange={setText2}>{text2}/></TextField>

            <RaisedButton label="Get Positions" primary={true} style={style}  onClick={getPositions}/>
            <RaisedButton label="Show on Map" primary={true} style={style} onClick={getPositions}/>
            
        </MuiThemeProvider>   
        </div>
        
    );
}

const style = {
    margin: 30,
};

export default DeviceIdPage;
