"use strict";

var _factoryPattern = require("./factoryPattern");

// Factory design pattern:
var employee = [];
var fp = new _factoryPattern.employeeFactory();
employee.push(fp.create("Ashar", 1));
employee.push(fp.create("Rohail", 1));
employee.push(fp.create("Zeeshan", 2));
employee.forEach(function (emp) {
  _factoryPattern.say.call(emp);
});