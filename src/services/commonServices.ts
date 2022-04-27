const commonServices = {
    getTimeDuration: function(startDate: Date, endDate: Date): string {
        let diffMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
        return commonServices.formatDuration(diffMilliseconds);
    },

    formatDuration: function(milliseconds: number): string {
        let hours = Math.floor(milliseconds / (1000 * 60 * 60));
        let minutes = Math.floor((milliseconds - hours * 1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor((milliseconds - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
        return commonServices.addLeadingZeros(hours, 2)
            + ":" + commonServices.addLeadingZeros(minutes, 2)
            + ":" + commonServices.addLeadingZeros(seconds, 2);
    },

    addLeadingZeros: function(num: number, totalLength: number): string {
        return String(num).padStart(totalLength, '0');
    }
}

export default commonServices;