const Criteria = () =>{
    let deviceId = deviceId.trim(); // select data from input and trim it
    if (deviceId.length > 0) {
        this.terminalId = deviceId;
    }

    let startDate = startDate.trim(); // select data from input and trim it
    if (startDate.length > 0) {
        this.startDate = startDate;
    }

    let endDate = endDate.trim(); // select data from input and trim it
    if (endDate.length > 0) {
        this.endDate = endDate;
    }
}

export default Criteria;