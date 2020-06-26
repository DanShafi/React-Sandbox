import React from "react"
import ReactDOM from "react-dom"
import Stylesheet from "../src/style.css"

function MyInfo() {
    return (
        <>
        <h1>Danish Shafi</h1>
        <p>I am an aspiring frontend developer.</p>
        <ul>
            <li>Dubai</li>
            <li>America</li>
            <li>Maldives</li>
        </ul>
        </>
    )
}

ReactDOM.render(<MyInfo />, document.querySelector('#root'));