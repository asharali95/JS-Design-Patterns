function Tester(name) {
  this.name = name;
  this.type = "Tester";
}
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function say() {
  console.log("My name is " + this.name + " and I am a " + this.type);
}
function employeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}
export { employeeFactory, say };
