import React from "react"
import Stylesheet from "../src/style.css"
import MainContent from "../src/components/MainContent"
import Footer from "../src/components/Footer"
import TodoItem from "../src/components/TodoItem"

const App = () => (
    <div className="container">
        <MainContent />
        <TodoItem label="Test 1" />
        <TodoItem label="Test 2" />
        <TodoItem />
        <TodoItem />
        <Footer />
    </div>
)

export default App