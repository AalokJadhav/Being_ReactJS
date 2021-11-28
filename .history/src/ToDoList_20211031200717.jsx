import React from "react";

const TodoList = (props) => {

    const deleteItems = () => {
        console.log('deleted');
    }

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