export default class ISODate extends Date {
    // Get current day of the week with monday as zero.
    getISODay() {
        return (this.getUTCDay() || 7) - 1;
    }
    // Get current number of the week.
    // As per RobG (2020-01-05) answer on the StackOverflow question:
    // https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
    getISOWeek() {
        let d = new ISODate(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
        const dayNum = d.getISODay();
        d.setUTCDate(d.getUTCDate() + 3 - dayNum);
        const yearStart = new ISODate(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    }
    ;
    // Get number of days between two dates.
    // A version of Miles (2009-02-12) datediff function in the answer on the
    // StackOverflow question:
    // https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates
    // With the use of Math.trunc instead of Math.round as per Jin Wang's (2016-07-06)
    // comment.
    static daysBetween(day1, day2) {
        return Math.trunc((day1.getTime() - day2.getTime()) / 86400000);
    }
}
