import { useState, useEffect } from "react";

function IntervalWithUseEffect() {
    const [counter, setCounter] = useState(0);
    // const [word, setWord] = useState("Hello world");
    console.log("the component is rendered");

    useEffect(()=>{
        console.log("The compoent is MOUNTED");
        setInterval(()=>{
            setCounter((previousCounter)=> previousCounter +1)
        }, 1000)
    }, []) // with the empty array we are only executing this part when the component is mounted 

   /*  useEffect(()=>{
        console.log("The counter is updated");
    }, [counter]) // This useEffect is keeping track of the counter state and only triggerd when the value changes
 */
   /*  setInterval(() => {
        setCounter(counter + 1);
    }, 1000) */

    return (
        <>
            <h1>{counter}</h1>
        </>
    )
}

export default IntervalWithUseEffect;