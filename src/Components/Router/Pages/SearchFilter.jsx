import React, { useState} from 'react';
import SResult from './SResult';

const SearchFilter = (props) => {

    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    };

    return (
        <>
         <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u>- Live Search Filter </h5><br /><br />
        <div className="searchbar">
        <input type="text" placeholder="Search Anything.."
            value={img} 
            onChange={inputEvent}       
         />
         {img === "" ? null : <SResult  name={img} />
}
        </div>
        </>
    )
}

export default SearchFilter;