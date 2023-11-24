import { useState } from "react";
import { useContext } from "react";
import InputContext from "./input-context";
const Input = () =>{
    const [input,setInput] = useState('');
    const {updateDatalist} = useContext(InputContext);
    const handleClick =() =>{
        updateDatalist(input);
        setInput('');
    }
    const handleChange =(e) =>{
        setInput(e.target.value);
    }
    return(
        <div>
            <input onChange={handleChange} value={input} />
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Input;