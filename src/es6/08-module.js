// Clase 13
// import hello from "./module.js";

// hello();

// import getData from "./module.js";

// export function solution() {
//   return getData().then(res => console.log(res));
// }

// solution();

import { getData } from "./module.js";

export function solution() {
  return getData().then(movies => movies);
}

solution();