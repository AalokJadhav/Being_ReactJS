import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Axios = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() =>{
        console.log('useEffect works..!');

        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Axios and useEffect</u>- fetch the pokemon API </h5><br /><br />
            <div className="content">
            <h6>Axios is a promise based HTTP client for the browser and Node. js.
            Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
            It can be used in plain JavaScript or with a library such as Vue or React.</h6>
            <h1>You Choose <span style={{color: 'red'}} >{num} Value. </span></h1>
            <h1> My Name is <span style={{color: 'red'}} >{name} </span></h1>
            <h1>I Have <span style={{color: 'red'}} >{moves} moves. </span></h1>
                <select 
                value={num} 
                onChange={(event) => {
                setNum(event.target.value)
                }}> 
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                </select>
                <br />
                <h6 style={{color:'green'}}>Select Any Value</h6>
                </div>
        </>
    )
}

export default Axios;
