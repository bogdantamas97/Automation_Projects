const today = new Date();

const yyyy = today.getFullYear();
var mm = today.getMonth() + 1;
var dd = today.getDate();

const hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

dd < 10 && (dd = '0' + dd);
mm < 10 && (mm = '0' + mm);

minutes < 10 && (minutes = '0' + minutes);
seconds < 10 && (seconds = '0' + seconds);

getCurrentDate = () => dd + '-' + mm + '-' + yyyy + '  ' + hour + ':' + minutes + ':' + seconds;