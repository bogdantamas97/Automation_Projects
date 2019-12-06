import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    margin: 15,
};

export const RoutesHandler = () =>{

    console.log(Route);
    return(
   <Router>
      <div>
      <MuiThemeProvider key={"theme"}>
        <Switch>
          <Route path="/login" component={LoginForm}>
                <LoginForm/>
          </Route>
          <Route path="/register" component={RegisterForm}>
                <RegisterForm/>
          </Route>
         {/* <PrivateRoute path="/welcome">
            <ProtectedPage />
          </PrivateRoute>  */}
        </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
    );
}

export default RoutesHandler;
