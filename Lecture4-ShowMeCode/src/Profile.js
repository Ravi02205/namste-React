import { useState } from "react";
function Profile(props) {
    const [count, setCount] = useState(0);
    handleClick = () => {
        setCount(1);
    }
    return (
        <>
            <h1>Child 1</h1>
            <h2>Profile Section</h2>
            <h3>Name : {props.name}</h3>
            <p>count : {count}</p>
            <button onClick={handleClick}>count</button>
        </>
    );
}

export default Profile;