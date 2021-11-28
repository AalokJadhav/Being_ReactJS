import React from 'react';

const ToDoList = () => {
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>ToDo List</u> -  App </h3><br /><br />

            <div className="main_div">
            <div className="center_div">
                <h1 className="heading">Todo App</h1>
                <br/>
                    <input className="todo_input" type="text" placeholder="Add your new todo"></input>
                    <button className="todo_button"><i class="fas fa-plus"></i></button>
                </div>
                </div>
                <ul class="todoList">
                    <li>apple</li>
                </ul>
        </>
    )
}

export default ToDoList;