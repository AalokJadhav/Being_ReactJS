import React from "react";

const TodoList = (Props) => {

    const deleteItems = () => {
        console.log('deleted');
    }

    return (
        <>
            <div className="todo_style">
                <button className="todolist_button" onClick={Props.onSelect}> <i className="fa fa-close"></i>
                </button>
                <li>{Props.text}</li>
            </div>
        </>
    )
}

export default TodoList;