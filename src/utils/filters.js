const util = require("util");
const datefns = require("date-fns");
const { format, utcToZonedTime } = require("date-fns-tz");

module.exports = {
  format: (data, fmt) => datefns.format(new Date(data), fmt),
  formatISO: (data) => datefns.formatISO(new Date(data)), 
  formatDate: (data) => {
    return format(utcToZonedTime(data, "UTC"), "PPP");
  },
  log: (data) => console.log(`\n\n${util.inspect(data)}\n\n`),
}; 
