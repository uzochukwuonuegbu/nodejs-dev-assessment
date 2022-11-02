type counterFn = (...args: any[]) => any;

export const counterFn = (currentCount?: number): [counterFn, counterFn] => {
    let counter = currentCount || 0;

    let firstFn = function () {
        return counter;
    }
    let secondFn = function () {
        counter++;
    }
    return [firstFn, secondFn];
}



const [getA, nextA] = counterFn(1);
console.log(getA()); // 1
nextA();
console.log(getA()); // 2
const [getB, nextB] = counterFn(10);
nextB();
console.log(getA()); // 2
console.log(getB()); // 11
nextA();
console.log(getA()); // 3