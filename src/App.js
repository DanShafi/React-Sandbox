import React, {Component} from "react"
import "../src/style.css"
import ToDoItem from "./components/TodoItem"
import todoData from "./components/todoData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }

    }
    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id}
            item={item} />)
        return (
            <div>
                <h1>My First To-Do List</h1>
                {todoItems}
            </div>
        )
    }
}



// class Header extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             username: "DanShafi",
//         }
//     }

//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.state.username} and {this.props.username}!</p>
//             </header>
//         )
//     }
// }

// class Practice extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "Danish",
//             age: 27
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old.</h3>
//             </div>
//         )
//     }
// }

// class Greeting extends Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         return (
//             <div>
//                 <h1>Hello, it's {hours}:00PM!</h1>
//             </div>
//         )
//     }
// }

export default App

