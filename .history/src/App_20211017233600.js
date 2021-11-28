import React from "react";
import Heading from "./Heading";
import List from "./List";

const Characters = ['Ross', 'Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe'];
const AllCharacters = [];

Characters.forEach(function (data) {
    AllCharacters.push(<li>{data}</li>);
});

function fullName() {
    let name = 'Alok Jadhav';
    return name;
}

function App() {

    return (
        <>
        <Heading />
        <List/>
    </>
    );
}

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

export default App;
export { AllCharacters, fullName, add, sub, divi, mul};
