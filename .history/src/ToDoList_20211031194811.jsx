import React from "react";

const TodoList = (Props) => {

    return (
        <>
            <div className="todo_style">
                <button className="todolist_button"> <i className="fa fa-trash-o"></i>
                </button>
                <li>{Props.text}</li>
            </div>
        </>
    )
}

export default TodoList;