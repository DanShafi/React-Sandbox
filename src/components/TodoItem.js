import React from "react"

const TodoItem = props => {
    return (
        <div>
            <input type="checkbox" name="placeholder"/>
            <label for="placeholder">{props.label}</label>
        </div>
    )
}

export default TodoItem