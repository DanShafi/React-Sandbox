import React from "react"

const Jokes = props => {
    return (
        <div>
            <h3>Q: {props.question}</h3>
            <h3>A: {props.punchLine}</h3>
            <hr />
        </div>
    )
}

export default Jokes