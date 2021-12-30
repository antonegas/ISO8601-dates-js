// Get current day of the week with monday as zero.
Date.prototype.getISODay = function () {
  return (this.getUTCDay() || 7) - 1;
};

// Get current number of the week.
// As per RobG (2011-05-24) answer on the StackOverflow question:
// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
// Modified to use correction from Jacob Lauritzen (2016-01-04).
Date.prototype.getISOWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth());
  d.setHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + 4 - d.getISODay());
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
};
