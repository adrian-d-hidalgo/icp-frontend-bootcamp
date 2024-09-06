import "./Counter.css";

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleOnClick() {
        setCount(count + 10); // Incrementa el contador en 10
    }

    return (
        <div>
            <button className="counter-button" onClick={handleOnClick}>Incrementar</button>
            <p>Contador: {count}</p>
        </div>
    );
}

export default Counter;