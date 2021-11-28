import React from "react";
import Heading from "./Heading";
import List from "./List";

const Characters = ['Ross', 'Chandler', 'Monica', 'Rachel', 'Ross', 'Phoebe'];

Characters.forEach(function (data) {
    Characters.push(data);
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
export { Characters};