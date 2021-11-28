import React from 'react';

const ToDoList = () => {
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>ToDo List</u> -  App </h3><br /><br />

            <div class="wrapper">
                <header>Todo App</header>
                <div class="inputField">
                    <input type="text" placeholder="Add your new todo"></input>
                    <button><i class="fas fa-plus"></i></button>
                </div>
                <ul class="todoList">
                </ul>
                <div class="footer">
                    <span>You have <span class="pendingTasks"></span> pending tasks</span>
                    <button>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default ToDoList;