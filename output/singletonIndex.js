"use strict";

var _singletonPattern = require("./singletonPattern");

//checking if singleton pattern is working or not.
var p1 = new _singletonPattern.Singleton.getProcessManager();
var p2 = new _singletonPattern.Singleton.getProcessManager();
console.log(p1 === p2);