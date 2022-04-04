"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fedx = Fedx;
exports.Shipping = Shipping;
exports.UPS = UPS;
exports.USPS = USPS;

function Fedx() {
  this.calculate = function (pkg) {
    return 2.5;
  };
}

function UPS() {
  this.calculate = function (pkg) {
    return 4.1;
  };
}

function USPS() {
  this.calculate = function (pkg) {
    return 3.2;
  };
} //STRATEGY PATTERN


function Shipping() {
  var _this = this;

  this.company = "";

  this.setStrategy = function (company) {
    _this.company = company;
  };

  this.calculate = function (pkg) {
    return _this.company.calculate(pkg);
  };
}