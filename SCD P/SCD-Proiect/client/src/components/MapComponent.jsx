import React, {useEffect} from "react";
import axios from "axios";
import Cookie from "js-cookie";
import MapContainer from '../containers/MapContainer';

const apiBaseUrl = "http://localhost:9000";

const Map = () => {

  const [disabled, setDisabled] = React.useState(false);
  const [locations, setLocations] = React.useState(undefined);

    useEffect(() => {
      setDisabled(false);
      axios.get(apiBaseUrl)
    .then((response)=> {
      !!response.data.filter(location => location.id === Cookie.get("token")).length && setDisabled(true)
      setLocations(response.data);
    })
    .catch(() => {
        console.log('Unknown error');
    })}, []);


    return (
      !!locations ?
      <div>
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKT9LmoztX4FjDThD6puBbkIfAstQYZdk"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{lat: 46.23, lng: 27.54}}
          zoom={8}
          disabledButton={disabled}
          locations={locations}
        />
      </div>
      :
      <div>Could not get data</div>

    );
  };

  export default Map;