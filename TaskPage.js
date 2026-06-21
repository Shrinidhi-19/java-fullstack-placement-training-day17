import React,{useState} from 'react'

export const TaskPage = () => {
    const [task, setTask] = useState("");
    const [uname, setUname] = useState("");
    const [ddate, setDdate] = useState("");

    const [add, setAdd] = useState("");
    const [record, setRecord] = useState([]);

    function handleTask(){
        fetch("http://localhost:8080/task",{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({task:task, name:uname, duedate:ddate})
        })
        .then((res) => res.text())
        .then((data) => setAdd(data));
    } 

    function handleShow(){
    fetch("http://localhost:8080/show")
        .then((res) => res.json())
        .then((data) => setRecord(data));
    } 


  return (
    <div>
        <h1>Give your Task</h1>
        <lable>Task: </lable>
        <input
            type='text'
            placeholder = 'Type your task'
            value = {task}
            onChange={(e) => setTask(e.target.value)}
        ></input>
<br></br>
        <lable>Name: </lable>
        <input
            type='text' 
            placeholder='Type your Name'
            value={uname} 
            onChange={(e) => setUname(e.target.value)}
        ></input>
<br></br>
        <lable>Due Date: </lable>
        <input 
        type = 'date'
        value={ddate}
        onChange={(e) => setDdate(e.target.value)}
        ></input>
<br></br>
        <button onClick={handleTask}>Add Task</button>
        <button onClick={handleShow}>Show Record</button>

        {
            record.map(
                (e) => (
                    <h1 key = {e.id}>{e.id} - {e.task} - {e.name} - {e.duedate} </h1>
                ))
        }

    </div>
  )
}
