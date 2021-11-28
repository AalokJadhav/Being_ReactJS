function add(a, b) {
    let result = a + b;
    return result;
}

function sub(a, b) {
    let result = a - b;
    return result;
}

function divi(a, b) {
    let result = a / b;
    result = result.toFixed(2)
    return result;
}

function mul(a, b) {
    let result = a * b;
    return result;
}

export {add, sub, divi, mul};