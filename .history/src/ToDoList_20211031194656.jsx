import React from "react";

const TodoList = (Props) => {

    return (
        <>
            <div className="todo_style">
                <button className="todolist_button"> <i class="fa fa-trash-o" style="font-size:28px"></i>
                </button>
                <li>{Props.text}</li>
            </div>
        </>
    )
}

export default TodoList;