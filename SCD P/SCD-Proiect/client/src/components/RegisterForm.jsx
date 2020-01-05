  import React, { useState} from 'react'; 
  import AppBar from 'material-ui/AppBar';
  import RaisedButton from 'material-ui/RaisedButton';
  import Button from '@material-ui/core/Button';
  import TextField from 'material-ui/TextField';
  import axios from 'axios';
  import {Route} from "react-router-dom";

  
  const RegisterForm = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirmation,setPasswordConfirmation] = useState("");
    const [email,setEmail] = useState("");
   

    const handleSubmit = () => {
            const apiBaseUrl = "http://localhost:8000/";
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(email.length > 5){
                if(username.length > 5) {
                    if(password.length > 5)
                    {

                        if(regex.test(email)){

                          if(password === passwordConfirmation)
                          {
                            axios.post(apiBaseUrl+ "insert?username="+username+"&email="+email+"&password="+password)
                            .then(function (response) {

                            if(response.data.code === 200){
                              console.log("Succes");
                            }

                            })
                            .catch(() =>  {
                            console.log('Unknown error');
                            });
                          }
                          else
                            alert("Password mismatch");

                        }
                        else alert('Invalid email');
                      }
                    else{
                      alert("Password too short");
                    }
                  }
                  else{
                    alert("Email too short");
                  }
                }
                else{
                  alert("Username too short");
                  
                }
             }
  
        return (
            <div>
             <AppBar
              title="Register"
             >
               <Route render={({history}) => <Button style={{color:"white"}} onClick={() => history.push("/")}>
                 Login
              </Button>}/>
              </AppBar>

                <form
                  onSubmit={()=> handleSubmit()}
                  autoComplete="off"
                >

                    <br/>
                    <TextField
                    hintText="Enter your username"
                    floatingLabelText="Username"
                    onChange = {(event) => setUsername(event.target.value)}
                    required
                    />
                    <br/>
                    <TextField
                    hintText="Enter your email"
                    floatingLabelText="Email"
                    onChange = {(event) => setEmail(event.target.value)}
                    required
                    />
                    <br/>
                    <TextField
                    type = "password"
                    hintText="Enter your password"
                    floatingLabelText="Password"
                    onChange = {(event) => setPassword(event.target.value)}
                    required
                    />
                    <br/>
                    <TextField
                    type = "password"
                    hintText="Confirm passowrd"
                    floatingLabelText="Password"
                    onChange = {(event) => setPasswordConfirmation(event.target.value)}
                    required
                    />
                    <br/>
                    <RaisedButton label="Register" primary={true} style={style} type="submit" variant="outlined"/>                  
                    <br/>
                </form>
            </div>
            );
    }
  
  const style = {
    margin: 15,
  };
  
  export default RegisterForm;