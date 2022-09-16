import './App.css';
import Header from './CustomComponents/Header'
import Footer from './CustomComponents/Footer'
import Todos from './CustomComponents/Todos';
import Addtodo from './CustomComponents/Addtodo';
import { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
 
  const onDelete = (todo)=>{
    console.log("On Delete for", todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addtodo = (title, desc)=>{
    // console.log("Adding", title, desc);
    let sn;
    if (todos.length === 0) {
      sn = 0;
    }
    else {
      sn = todos[todos.length - 1].sn + 1;
    }
    // let sn = todos[todos.length-1].sn + 1;
    
    const mytodo = {
      sn: sn,
      title: title,
      desc: desc,
    }
    settodos([...todos, mytodo])
    console.log(mytodo);
  }
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  
  return (
    <>
    <Header title="My To-Do List" searchbar={true} />
    <Addtodo addtodo={addtodo} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
