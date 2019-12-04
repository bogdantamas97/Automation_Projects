import $ from 'jquery';
import Criteria from '../subComponents/Criteria';
import {sendRequest} from './SendRequest';


const getPositionsSuccessHandler = (respData) => {
    $("#result").append("<br>" + JSON.stringify(respData));
    //$("#result").text(respData); // appends the json to the 'result' div. see index.html
}

const getPositionsErrorHandler = (status) => {
    alert("err response: " + status); // popup on err.
}

export const getPositions = () => {
    sendRequest("GET", "position?" + $.param(new Criteria()), null, getPositionsSuccessHandler, getPositionsErrorHandler);
}
