import React from "react";

const TodoList = (Props) =>  {

    return ( 
        <>
            <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true"></i>
            <ul>
            <li>{Props.text}</li>
            </ul>
            </div>
        </>
    )
    }

export default TodoList;