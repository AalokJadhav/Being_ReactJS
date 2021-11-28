import React from "react";

const TodoList = (Props) =>  {

    return ( 
        <>
            <div className="todo_style">
            <button className="todo_button"> + </button>
            <li>{Props.text}</li>
            </div>
        </>
    )
    }

export default TodoList;