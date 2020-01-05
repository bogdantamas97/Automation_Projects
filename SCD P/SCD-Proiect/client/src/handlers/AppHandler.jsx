import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {PrivateRoute} from "../utils/PrivateRoute";

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import DeviceIdPage from "../components/DeviceIdPage";
import MapComponent from '../components/MapComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const RoutesHandler = () =>{

    return(
   <Router>
      <div>
        <MuiThemeProvider key={"theme"}>
          <Switch>
            <Route path="/register" component={RegisterForm}>
             <RegisterForm/>
            </Route>
            <PrivateRoute path="/device" component={DeviceIdPage}>
              <DeviceIdPage/>
            </PrivateRoute> 
            <PrivateRoute path="/map" component={MapComponent}>
              <MapComponent/>
            </PrivateRoute> 
            <Route path="/" component={LoginForm}>
              <LoginForm/>
            </Route>
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
    );
}

export default RoutesHandler;
