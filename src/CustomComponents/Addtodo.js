import React, { useState } from 'react'

export default function Addtodo(props) {
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Incomplete Input");
        }
        props.addtodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <form className='container' onSubmit={submit}>
            <div className="form-group" >
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder="Example input"/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Another input"/>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    )
}
