import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    const myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h2>My Todos List</h2>
            {
                props.todos.length === 0 ? "No Todos To Display" : props.todos.map((todo) => { 
                    return <TodoItem todo={todo} key={todo.sn} deleteTodo={props.deleteTodo} />
                })
            }
        </div>
    )
}
