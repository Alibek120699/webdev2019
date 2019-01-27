//
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
}
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name); // output: checkThatTwoPlusTwoEqualsFourAMillionTimes

// functions as parameters
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};
const addTwo = num => num + 2;
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};  
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);  
const checkConsistentOutput = (func, val) => {
    let v1 = func(val);
    let v2 = func(val);
    if (v1 === v2) {
        return v1
    } else {
        return 'This function returned inconsistent results'
    }
};
checkConsistentOutput(addTwo, 10);