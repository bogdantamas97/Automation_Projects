import $ from 'jquery';

export const sendRequest = (type, resource, data, successHandler, errHandler) => {
    $.ajax({
        type: type,
        url: "http://localhost:8081/" + resource,
        data: data,
        dataType: "json",
        accepts: "application/json",

        success: function (data) {
            successHandler (data);
        }.bind(this),

        error: function (status) {
            errHandler(status);
        }.bind(this)
    });
}