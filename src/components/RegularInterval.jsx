import { useState } from "react";

function RegularInterval() {
    const [counter, setCounter] = useState(0);
    console.log("the component is rendered");

    setInterval(() => {
        setCounter(counter + 1);
    }, 1000)

    return (
        <>
            <h1>{counter}</h1>
        </>
    )
}

export default RegularInterval;