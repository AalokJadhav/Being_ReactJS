import React from "react";

const TodoList = (props) => {



    return (
        <>
            <div className="todo_style">
                <button className="todolist_button" onClick={props.onSelect}> <i className="fa fa-close"></i>
                </button>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;