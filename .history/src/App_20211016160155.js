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

function Addition(a, b) {
    let result = a + b;
    return result;
}

export default App;
export { AllCharacters, fullName, Addition};