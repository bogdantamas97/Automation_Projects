import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import Button from '@material-ui/core/Button';
import RaisedButton from 'material-ui/RaisedButton';
import { Route } from "react-router-dom";
import { getCurrentDate } from "../utils/DateGetter";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

import './style/MapContainer.css'

const apiBaseUrl = "http://localhost:9000/";


const Markers = ({ locations }) => {
  return locations.map(pos => {
    return (
      <Marker position={{ lat: pos.lat, lng: pos.lng }} />
    );
  });
};

const Map = ({ locations, zoom, center }) => {
  return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}>
      <Markers locations={locations} />
    </GoogleMap>
  );
};

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabledButton: props.disabledButton, locations: props.locations };
  }

  // componentWillUnmount(){
  //   Cookie.remove("token");
  // }
  
  addMarker = () => {
  
    const newLocation = {
      id: Cookie.get("token"),
      date: getCurrentDate(),
      lat: getRandomInRange(43, 48, 2),
      lng: getRandomInRange(20, 29, 2)
    };

    this.setState(prevState => ({
      disabledButton: true, locations: [...prevState.locations, newLocation]
    }));

  
      axios.post(apiBaseUrl+ "insert?id="+newLocation.id+"&date="+newLocation.date+"&lat="+newLocation.lat+"&lng="+newLocation.lng)
          .then(function (response) {

          if(response.data.code === 200){
              console.log("Succes");
          }})

          .catch(() =>  {
              console.log('Unknown error');
      });
    
  }
  removeMyMarker = () => {
    const currentId = Cookie.get("token");

      this.state.locations.forEach((user)=>
      user.id === currentId &&
      axios.post(apiBaseUrl+ "delete?id="+user.id)
          .then(() => {})
          .catch(() =>  {})
      );

    this.setState({disabledButton: false, locations: this.state.locations.filter(user => user.id !== currentId)})
  }

  render() {

    return (
      <div>
            <div>
              <Map
                center={this.props.center}
                zoom={this.props.zoom}
                locations={this.state.locations}
              />
              <Button variant="outlined" disabled={this.state.disabledButton} color="primary" onClick={()=> this.addMarker()}>Add static marker</Button>
              <Button variant="outlined" disabled={!this.state.disabledButton} color="secondary" onClick={()=> this.removeMyMarker()}>Remove my maker</Button>
              <Route render={({history}) => <div class="button"><RaisedButton label="Go Back" primary={true} onClick={() =>{
                history.push("/device")} 
                } />
               <RaisedButton label="Logout" secondary={true} onClick={()=> {
                Cookie.remove("token");
                history.push("/") 
                }} />
            </div>}/>
            </div>
          
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));
