/* main.ts */

import { add, inAsync, multiply, subtract } from "./module.js";

console.log(add(10, 20));
console.log(add(20, 30));
console.log(subtract(10, 20));
console.log(multiply(5, 10));
console.log(await inAsync(3000));
