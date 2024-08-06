import { useState } from "react"


function Counter(){
    var [count,updatecount]=useState(0)
    function increment(){
        updatecount(count+1)
    }
    function decrement(){
        updatecount(count-1)
    }
    return(
        <div className="count">
            <h1>COUNTER</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter