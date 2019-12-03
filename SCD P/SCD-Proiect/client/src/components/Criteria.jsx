export const Criteria = () =>
{
    let deviceId = $('#deviceId').val().trim(); // select data from input and trim it
    if (deviceId.length > 0) {
        this.terminalId = deviceId;
    }

    let startDate = $('#startDate').val().trim(); // select data from input and trim it
    if (startDate.length > 0) {
        this.startDate = startDate;
    }

    let endDate = $('#endDate').val().trim(); // select data from input and trim it
    if (endDate.length > 0) {
        this.endDate = endDate;
    }
}