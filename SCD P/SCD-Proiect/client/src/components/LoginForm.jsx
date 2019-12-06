import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Route} from "react-router-dom";

import axios from 'axios';

const apiBaseUrl = "http://localhost:3000/api/";

const LoginForm = () => {

  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
    
  const handleClick = (event) => {
    const payload={
      "userid":username,
	    "password":password,
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response)
     
     if(response.data.code === 204){
       console.log("Username password do not match");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  
  }

  return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="Login"
         />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        </div>
        </MuiThemeProvider>
        <MuiThemeProvider key={"theme"}>
      <div>
      <TextField
        hintText="Enter your Username"
        floatingLabelText="Username"
        onChange={(value) => setPassword(value)}
        />
      <br/>
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange = {(value) => setUsername(value)}
          />
        <br/>
        <Route render={({history}) => <RaisedButton label="Register" primary={true} style={style} onClick={() => history.push("/register")}/>}/>
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => handleClick(event)}/>
     </div>
      </MuiThemeProvider>
    </div>
        );
}

const style = {
  margin: 15,
};

export default LoginForm;