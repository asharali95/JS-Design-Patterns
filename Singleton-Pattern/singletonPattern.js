//creating an IIFE function to privatize the instance

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }
  let pManager;
  function createPManager() {
    return (pManager = new ProcessManager());
  }
  return {
    getProcessManager: () => {
      if (!pManager) {
        return (pManager = createPManager());
      }
      return pManager;
    },
  };
})();

export { Singleton };
