import React from "react"
import "./style.css"
import Button from "./Button"

const Apple=()=>{
    return(
        <div>
            <h1 style={{textAlign : "center"}}> Hello World</h1>
            <Button buttonText="Apple"/>
            <Button buttonText="Guava"/>
            <Button buttonText="Berris"/>
        
        </div>
    )
}

export default Apple