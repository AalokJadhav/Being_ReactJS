import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';


// const User = ({match}) => {
//     return <h1> user {match.params.name} </h1>
// }

const User = (props) => {
    const { fname, lname } = useParams();
    const location = useLocation();
    console.log(location);
    const history = useNavigate();
    console.log(history);
    return (
        <>
        <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u>- useParams </h5><br /><br />
            <div className="content">
            <h6>In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action.</h6>
            <h6 style={{color:'red'}}>Here alok and jadhav is params.</h6>
            <h1>Ths is {props.name} <u>{fname} {lname} </u> Page</h1>
            </div>
              <hr className="line"></hr>
              <h5 className="title">🔵<u>React Hook</u>- useLocation </h5><br /><br />
              <div className="content">
              <h6>The useLocation hook is a function that returns the location object that contains information about the current URL.</h6>
            <p> My Current location is {location.pathname}</p>
            {location.pathname === `/user/alok/jadhav` ? 
            (<button onClick={() => alert('This is useLocation with condition')}> Clik Me </button>) : null}
            </div>
            <hr className="line"></hr>
              <h5 className="title">🔵<u>React Hook</u>- useHistory </h5><br /><br />
              <div className="content">
              <h6>The useHistory hook gives you access to the history instance that you may use to navigate.</h6>
              <h6><u style={{color: 'red'}}>Note</u> - in react-router-dom V6 useHistory() is replaced by useNavigate() .The history object is mutable. Therefore it is recommended to access the location from the render props of Route, not from history.location. </h6>
            </div>
        </>
    )
}

export default User;