import React from "react";
import Heading from "./Heading";
import List from "./List";

const Characters = ['Ross', 'Chandler', 'Monica', 'Rachel', 'Ross', 'Phoebe'];
const AllCharacters = [''];

Characters.forEach(function (data) {
    AllCharacters.push(<li>{data}</li>);
})

function App() {

    return (
        <>
        <Heading />
        <List/>
    </>
    );
}

export default App;
export { AllCharacters};
