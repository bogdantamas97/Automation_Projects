import React from "react";
import Criteria from './components/Criteria';
import "./App.css";

const sendRequest = (type, resource, data, successHandler, errHandler) => {
    jQuery.ajax({
        type: type,
        url: "http://localhost:8081/" + resource,
        data: data,
        dataType: "json",
        accepts: "application/json",

        success: function (data, status, jqXHR) {
            successHandler (data);
        },

        error: function (jqXHR, status) {
            errHandler(status);
        }
    });
}

const getPositions = () => {
    var criteria = new Criteria();
    sendRequest("GET", "position?" + $.param(criteria), null, getPositionsSuccessHandler, getPositionsErrorHandler);
}




const gpsApp = () => {
    return
<div id align="center">
<table align="center">
    <tr>
        <td><b>Device Id</b></td>
        <td><input type="text" id="deviceId" size="35" value="1" class="regular_input"></td>
    </tr>
    <tr>
        <td><b>Start Date</b></td>
        <td><input type="text" id="startDate" size="35" value="2015-01-01 23:00:00"></td>
    </tr>
    <tr>
        <td><b>End Date</b></td>
        <td><input type="text" id="endDate" size="35" value="2018-01-02 23:00:00"
                   onkeydown="if (event.keyCode == 13) getPositions()"></td>
    </tr>
    <tr>
        <td><br></td>
        <td><br></td>
    </tr>
    <tr>
        <td align="left"><input type="button" id="get_positions_button" size="35" value="Get Positions"
                                onclick=getPositions()></td>
        <td align="right"><input type="button" name="show_static_position" size="35" value="Show on Map"
                                 onclick=goToPage('map.html')></td>
    </tr>
</table>
</div>
}

export default gpsApp;
