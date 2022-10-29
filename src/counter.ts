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