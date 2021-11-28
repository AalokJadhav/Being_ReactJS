import React from "react";

const TodoList = (Props) => {

    return (
        <>
            <div className="todo_style">
                <button className="todolist_button"> <i class="fa fa-trash-o"></i>
                </button>
                <li>{Props.text}</li>
            </div>
        </>
    )
}

export default TodoList;