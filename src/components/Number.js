import { useState } from "react"

function NumberGenerator(){
    var [number,changenum]=useState("Number")

    function updatenum(){
        changenum(Math.floor(Math.random()*10)+1)
    }
    return(
        <div className="number">
            <h1>RANDOM NUMBER GENERATOR</h1>
            <h1>{number}</h1>
            <button onClick={updatenum}>Generate</button>
        </div>
    )
}

export default NumberGenerator