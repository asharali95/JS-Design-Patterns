import { Fedx, UPS, USPS, Shipping } from "./strategyPattern";
const pkg = { from: "Karachi", to: "Islamabad", weight: "4.0" };
const fedxIns = new Fedx();
const ups = new UPS();
const usps = new USPS();
// console.log(fedxIns.calculate(pkg));
// console.log(ups.calculate(pkg));
// console.log(usps.calculate(pkg));

// INSTEAD OF DOING ALL THIS. USE STRATEGY PATTERN
const shipping = new Shipping();
shipping.setStrategy(fedxIns);
console.log(shipping.calculate(pkg));
