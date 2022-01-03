// Get current day of the week with monday as zero.
Date.prototype.getISODay = function () {
  return (this.getUTCDay() || 7) - 1;
};

// Get current number of the week.
// As per RobG (2020-01-05) answer on the StackOverflow question:
// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
Date.prototype.getISOWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getISODay();
  d.setUTCDate(d.getUTCDate() + 3 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

// Get number of days between two dates.
// A version of Miles (2009-02-12) datediff function in the answer on the
// StackOverflow question:
// https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates
// With the use of Math.trunc instead of round as per Jin Wang's (2016-07-06)
// comment.
Date.daysBetween = function (day1, day2) {
  return Math.trunc((d1 - d2)/86400000)
};
