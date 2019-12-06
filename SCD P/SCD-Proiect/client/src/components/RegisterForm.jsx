  import React, { Component } from 'react';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import AppBar from 'material-ui/AppBar';
  import RaisedButton from 'material-ui/RaisedButton';
  import TextField from 'material-ui/TextField';
  import axios from 'axios';
  import {Route} from "react-router-dom";

  
  const RegisterForm = () => {
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [passwordConfirmation,setPasswordConfirmation] = React.useState('');
    const [email,setEmail] = React.useState('');
      
    const handleSubmit = () => {
            const apiBaseUrl = "http://localhost:3000/api/";
    
            if(email.length>0)
                if(username.length >0) 
                    if(password.length >0 && passwordConfirmation === password)
                    {
                        const payload = {
                        "email": email,
                        "username":username,
                        "password":password,
                        }

                        axios.post(apiBaseUrl+'/register', payload)
                        .then(function (response) {
                        
                        if(response.data.code === 200){
                        }
                        else{
                            console.log("some error ocurred",response.data.code);
                        }
                        })
                        .catch(function (error) {
                        console.log(error);
                        });
                    }
                        else{
                        alert("Input field value is missing");
                    }
        }
  
        return (
            <div>
             <AppBar
              title="Register"
                />
                <br/>
                <TextField
                hintText="Enter your username"
                floatingLabelText="Username"
                onChange = {(value) => setUsername(value)}
                />
                <br/>
                <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                onChange = {(value) => setEmail(value)}
                />
                <br/>
                <TextField
                type = "password"
                hintText="Enter your password"
                floatingLabelText="Password"
                nChange = {(value) => setPassword(value)}
                />
                <br/>
                <TextField
                type = "password"
                hintText="Confirm passowrd"
                floatingLabelText="Password"
                nChange = {(value) => setPasswordConfirmation(value)}
                />
                <br/>
                <Route render={({history}) => <RaisedButton  label="Login" primary={true} style={style} onClick={() => history.push("/login")}/>}/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => handleSubmit(event)}/>
            </div>
            );
    }
  
  const style = {
    margin: 15,
  };
  
  export default RegisterForm;