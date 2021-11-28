import React from "react";

const TodoList = (Props) => {

    const deleteItems = () => {
        console.log('deleted');
    }

    return (
        <>
            <div className="todo_style">
                <button className="todolist_button" onClick={deleteItems}> <i className="fa fa-close"></i>
                </button>
                <li>{Props.text}</li>
            </div>
        </>
    )
}

export default TodoList;