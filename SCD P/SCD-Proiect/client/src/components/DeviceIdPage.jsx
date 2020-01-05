import React, {useEffect} from "react";
import axios from "axios";
import Cookie from 'js-cookie';
import { Route } from "react-router-dom";
import { Card, CardContent, Typography, TextField, makeStyles } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import './style/DeviceIdPage.css';

const apiBaseUrl = "http://localhost:9000";

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
    }
  }));

export const DeviceIdPage = () => {

    const classes = useStyles();

    const [text1,setText1] = React.useState("2015-01-01 23:00:00");
    const [text2,setText2] = React.useState("2020-01-02 23:00:00");

    const [users, setUsers] = React.useState([]);
    const [showPositions, shouldShowPositions] = React.useState(false);

    useEffect(() => {
      axios.get(apiBaseUrl)
    .then((response)=> {
        setUsers(response.data);
    })
    .catch(() => {
        console.log('Unknown error');
    })}, []);

    const getDates = () => users.filter((user)=> text1 < user.date && user.date < text2)

    return (
        <div>
        <MuiThemeProvider key={"theme"}>
            <TextField className={classes.textField} label="Start Date" style={style} defaultValue={text1} onChange={(event)=> {
                shouldShowPositions(false);
                setText1(event.target.value)}}>{text1}</TextField>
            <TextField className={classes.textField} label="End Date" style={style} defaultValue={text2} onChange={(event)=> {
                shouldShowPositions(false);
                setText2(event.target.value)}}>{text2}/></TextField>
            <RaisedButton label="Get Positions" primary={true} style={style} onClick={()=> shouldShowPositions(true)}  />
            <Route render={({history}) => 
            <span>
            <RaisedButton label="Show on Map" primary={true} style={style} onClick={() => history.push("/map")} />
            <div class="button">
            <RaisedButton  label="Logout" secondary={true} onClick={()=> {
                Cookie.remove("token");
                history.push("/") 
            }} />
            </div>
            </span>
            }/>
            
            
        </MuiThemeProvider>  
        {showPositions && getDates().map((user)=> 
        <Card>
            <CardContent>
            <Typography variant="h6" component="div">
                    Lat:
                <Typography variant="body" component="span">
                    <b>{user.lat.toFixed(2)}</b>
                </Typography>
            </Typography>
            <Typography variant="h6" component="div">
                    Long:
                    <Typography variant="body" component="span">
                    <b>{user.lng.toFixed(2)}</b>
                </Typography>
            </Typography>
            <Typography variant="h6" component="div">
                    Data:
                    <Typography variant="body" component="span">
                    <b>{user.date}</b>
                </Typography>
            </Typography>
                
            </CardContent>
        </Card>)
        }
        {showPositions && getDates().length > 0 && <RaisedButton label="Clear" secondary={true} style={style} onClick={()=> shouldShowPositions(false)}/>}
        </div>
        
    );
}

const style = {
    margin: 30,
};

export default DeviceIdPage;
