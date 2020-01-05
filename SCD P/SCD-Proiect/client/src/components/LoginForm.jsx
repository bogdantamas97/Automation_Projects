import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Link from '@material-ui/core/Link';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Cookie from 'js-cookie';
import { Route } from "react-router-dom";

import axios from 'axios';

const apiBaseUrl = "http://localhost:8000";

const LoginForm = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [isLoggedIn, setLoggedIn] = useState(Cookie.get("token") !== undefined);
    
  const handleClick = () => {
    axios.get(apiBaseUrl)
   .then((response)=> {
    if(response.data.filter((user)=> user.email === email)[0])
      if(response.data.filter((user)=> user.password === password)[0]){
        Cookie.set("token", response.data.filter((user)=> user.password === password)[0].id);
        setLoggedIn(true);
      } 
      else alert("Wrong password!");
    else alert("Username doesn't exist!");
   })
   .catch(() => {
     console.log('Unknown error');
   });
  }

  return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="GPS APP"
         />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        </div>
        </MuiThemeProvider>
        <MuiThemeProvider key={"theme"}>
      <div>
      <TextField
        hintText="Enter your email"
        floatingLabelText="Email"
        required
        onChange = {(event) => setEmail(event.target.value)}
        />
      <br/>
        <TextField
        type="password"
        hintText="Enter your Password"
        floatingLabelText="Password"
        required
        onChange={(event) => setPassword(event.target.value)}
          />
        <br/>
        <RaisedButton label="Login" primary={true} style={style} onClick={(event) => handleClick(event)}/>
        <Route render={({history}) => {
        isLoggedIn && history.push("/device") 
        return (
          <Link href="" onClick={() => history.push("/register")}>
            Don't have an account?Sign up.
          </Link>
        )}}/>
        
     </div>
      </MuiThemeProvider>
    </div>
        );
}

const style = {
  margin: 15,
};

export default LoginForm;