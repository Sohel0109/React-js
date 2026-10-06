import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClickI = () => {
        setCount(count+1);
    }
    const handleClickM = () => {
        setCount(count-1);
    }

     const [message, setmessage] = useState("");
     const handleChange = (e) => {
        setmessage(e.target.value);
     }
    return(
        <div>
            <button onClick={handleClickI}>Increase the count</button>
            <span>   {count}  </span>
            <button onClick={handleClickM}>Decrease the count</button><br /><br /><br />

            <input type="text" placeholder="Type anything" value={message} onChange={handleChange} />

            <p>{message}</p>
        </div>
    )
}