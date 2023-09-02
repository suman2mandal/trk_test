import React, {useState} from 'react';
import {addtodo} from "./slice";
import {useDispatch} from "react-redux";

function Home(props) {
    const [input,setInput] = useState("")
    const dispatch = useDispatch();
    const handleForm=(e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setInput('')
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor={"todo"} >enter todo data: </label>
                <input name="todo" value={input} className="bg-cyan-900 text-white p-2" onChange={(e)=>{setInput(e.target.value)}} />
                <button type="submit" className="bg-green-200 p-2">Add Todo</button>
            </form>
        </div>
    );
}

export default Home;