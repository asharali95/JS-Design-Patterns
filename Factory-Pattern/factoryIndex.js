// Factory design pattern:
import { employeeFactory, say } from "./factoryPattern";

const employee = [];
const fp = new employeeFactory();
employee.push(fp.create("Ashar", 1));
employee.push(fp.create("Rohail", 1));
employee.push(fp.create("Zeeshan", 2));
employee.forEach((emp) => {
  say.call(emp);
});
