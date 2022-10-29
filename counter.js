"use strict";
const counterFn = (currentCount) => {
    let counter = currentCount || 0;
    let firstFn = function () {
        console.log(counter);
    };
    let secondFn = function () {
        counter++;
    };
    return [firstFn, secondFn];
};
const [getA, nextA] = counterFn(1);
getA();
nextA();
getA();
const [getB, nextB] = counterFn(10);
nextB();
getA();
getB();
nextA();
getA();
nextB();
getB();
