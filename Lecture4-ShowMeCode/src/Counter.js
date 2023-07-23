import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    // approch: 1
    // const [count, setCount] = useState(0);
    // const [id, setId] = useState(0);
    // const handleClick = (flag) => {
    //     if (!flag) {
    //         clearInterval(id);
    //         return true;
    //     }
    //     let timerID = setInterval(() => {
    //         setCount((count)=>count + 1);
    //     },1000)
    //     setId(timerID);
    // }
    
    // approach 2 :
    const [count,setCount]=useState(0);
    const [flag,setFlag]=useState(false);
    const timerID=useRef(null);
    useEffect(()=>{
        if(flag){
            timerID.current=setTimeout(()=>{
                setCount(count+1);  
            },1000);
        }else{
            clearTimeout(timerID.current);
        }
    },[count,flag]);
    return (
        <div>
            {/* <button onClick={() => handleClick(true)}>Start</button>
            <button onClick={() => handleClick(false)}>Stop</button> */}
            <button onClick={() => setFlag(true)}>Start</button>
            <button onClick={() => setFlag(false)}>Stop</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter
