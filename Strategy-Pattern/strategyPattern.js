function Fedx() {
  this.calculate = (pkg) => 2.5;
}
function UPS() {
  this.calculate = (pkg) => 4.1;
}
function USPS() {
  this.calculate = (pkg) => 3.2;
}
//STRATEGY PATTERN
function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (pkg) => this.company.calculate(pkg);
}
export { Fedx, UPS, USPS, Shipping };
