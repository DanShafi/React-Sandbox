import React from "react"


const TodoItem = props => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" name="placeholder" 
                checked={props.item.completed} 
                onChange={() => console.log('Changed!')}
                />
            <label for="placeholder">{props.item.text}</label>
        </div>
    )
}

export default TodoItem