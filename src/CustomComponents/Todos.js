import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
    <div className='container' style={myStyle}>
        <h1 className="my-3" >TO-Dos</h1>
        
        {props.todos.map((todo)=>{
            
            return (
            <Todoitem todo={todo} key={todo.sn} onDelete={props.onDelete}/>
            )
            
        })}
    </div>
    )
}
