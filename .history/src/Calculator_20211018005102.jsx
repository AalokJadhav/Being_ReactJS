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

<div className="content">
      <ul className="content">
        <li>Addition = {add(10, 10)} </li>
        <li>Substraction = {sub(10, 10)} </li>
        <li>Division = {divi(40, 9)} </li>
        <li>Multiplication = {mul(10, 10)} </li>
      </ul>
    </div>

export {add, sub, divi, mul};