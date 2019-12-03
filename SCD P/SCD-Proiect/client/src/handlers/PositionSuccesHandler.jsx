export const getPositionsSuccessHandler = (respData) => {
    $("#result").append("<br>" + JSON.stringify(respData));
    //$("#result").text(respData); // appends the json to the 'result' div. see index.html
}