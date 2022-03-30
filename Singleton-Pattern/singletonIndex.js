import { Singleton } from "./singletonPattern";

//checking if singleton pattern is working or not.

const p1 = new Singleton.getProcessManager();
const p2 = new Singleton.getProcessManager();

console.log(p1 === p2);
