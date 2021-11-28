import React from "react";

const TodoList = (Props) =>  {

    return ( 
        <>
            <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true"></i>
            <li>{Props.text}</li>
            </div>
        </>
    )
    }

export default TodoList;