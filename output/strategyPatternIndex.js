"use strict";

var _strategyPattern = require("./strategyPattern");

var pkg = {
  from: "Karachi",
  to: "Islamabad",
  weight: "4.0"
};
var fedxIns = new _strategyPattern.Fedx();
var ups = new _strategyPattern.UPS();
var usps = new _strategyPattern.USPS(); // console.log(fedxIns.calculate(pkg));
// console.log(ups.calculate(pkg));
// console.log(usps.calculate(pkg));
// INSTEAD OF DOING ALL THIS. USE STRATEGY PATTERN

var shipping = new _strategyPattern.Shipping();
shipping.setStrategy(usps);
console.log(shipping.calculate(pkg));