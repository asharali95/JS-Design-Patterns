"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Singleton = void 0;

//creating an IIFE function to privatize the instance
var Singleton = function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  var pManager;

  function createPManager() {
    return pManager = new ProcessManager();
  }

  return {
    getProcessManager: function getProcessManager() {
      if (!pManager) {
        return pManager = createPManager();
      }

      return pManager;
    }
  };
}();

exports.Singleton = Singleton;