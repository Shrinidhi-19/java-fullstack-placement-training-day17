import React,{useState} from 'react';
import {TaskPage} from './TaskPage';

export const TestLogin = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    const [log, setLog] = useState(false);

    function handleClick(){
        if(name === "Mybatch" && pswd === "happy@143"){
            setLog(true);
        }
        else{
            alert("Check your username and Password");
        }
    }
    if(log){
        return (<TaskPage />);
    }
  return (
    <div>
        <h1>LOGIN PAGE</h1>
        <form>
            <label>Username: </label>
            <input
                type="text"
                placeholder = "Enter your username"
                value = {name}
                onChange={(e) => setName(e.target.value)}
            ></input>
<br></br>
            <label>Password: </label>
            <input
                type='password' 
                placeholder='Enter your Password'
                value={pswd} 
                onChange={(e) => setPswd(e.target.value)}
            ></input>
<br></br>
            <button onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}
