import React,  {useState} from 'react';
import TodoList from './TodoList';

const ToDoApp = () => {

    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([]);

    const itemsEvent = (event) => {
        setInputList(event.target.value);
    }

    const itemList =  () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
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
                      value={inputList}
                    ></input>
                    <button className="todo_button" onClick={itemList}> + </button>
                    <ul className="todoList">
                    {Items.map( (itemvalue) => {
                        return <TodoList text={itemvalue} />
                    })}
                </ul>
                </div>

                </div>
                
        </>
    )
}

export default ToDoApp;