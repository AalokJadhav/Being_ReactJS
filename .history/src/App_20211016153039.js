import React from "react";
import Heading from "./Heading";
import List from "./List";

const Characters = ['Ross', 'Rachel', 'Monica',  'Chandler', 'Phoebe'];
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

export default App;
export { AllCharacters, fullName};
