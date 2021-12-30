// Current day of the week with monday as zero
Date.prototype.getISODay = function () {
  return (this.getDay() || 7) - 1;
};
