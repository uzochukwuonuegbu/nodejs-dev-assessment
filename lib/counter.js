"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counterFn = void 0;
var counterFn = function counterFn(currentCount) {
  var counter = currentCount || 0;
  var firstFn = function firstFn() {
    console.log(counter);
    return counter;
  };
  var secondFn = function secondFn() {
    counter++;
  };
  return [firstFn, secondFn];
};

// const [getA, nextA] = counterFn(1);

// getA()
// nextA()
// getA();

// const [getB, nextB] = counterFn(10);

// nextB();
// getA();
// getB();
// nextA();
// getA();
// nextB();
// getB();
exports.counterFn = counterFn;