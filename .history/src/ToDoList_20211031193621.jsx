import React from "react";

const TodoList = (Props) =>  {

    return ( 
        <>
            <div className="todo_style">
            <ul>
            <i className="fa fa-times" aria-hidden="true"></i>
            <li>{Props.text}</li>
            </ul>
            </div>
        </>
    )
    }

export default TodoList;