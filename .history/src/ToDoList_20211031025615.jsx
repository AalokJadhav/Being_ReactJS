import React,  {useState} from 'react';

const ToDoList = () => {

    const [inputList, setInputList] = useState('apple');

    const itemsEvent = (event) => {
        setInputList(event.target.value)
    }
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>ToDo List</u> -  App </h3><br /><br />

            <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="heading">Todo App</h1>
                <br/>
                    <input className="todo_input" type="text" placeholder="Add new todo"
                      onChange={itemsEvent}
                    ></input>
                    <button className="todo_button"><i class="fas fa-plus"></i></button>
                    <ul class="todoList">
                    <li>{inputList}</li>
                </ul>
                </div>

                </div>
                
        </>
    )
}

export default ToDoList;