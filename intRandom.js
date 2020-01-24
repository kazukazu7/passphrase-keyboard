'use strict';

let random = (array, num) => {
  let a = array;
  let t = [];
  let r = [];
  let l = a.length;
  let n = num < l ? num : l;
  while (n-- > 0) {
    let i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

let test_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79,80,81,82,83,84];
let intRandom = random(test_array, 85);




