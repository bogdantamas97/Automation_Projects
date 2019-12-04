import React from "react";
import { getPositions } from '../utils/GetPositions';
import {AppBar, TextField, Button,Typography, Toolbar, makeStyles} from '@material-ui/core';

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
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Device ID
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
            <TextField className={classes.textField} label="Start Date" defaultValue={text1} onChange={setText1}>{text1}</TextField>
            <TextField className={classes.textField} label="End Date" defaultValue={text2} onChange={setText2}>{text2}</TextField>

            <Button variant="contained" color="primary" onClick={getPositions}>
                Get Positions
            </Button>
            <Button variant="contained" color="primary" onClick={getPositions}>
                Show on Map
            </Button>
        </div>
       
    )
}

export default DeviceIdPage;
