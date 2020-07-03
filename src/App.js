import React, {Component} from "react"
import Stylesheet from "../src/style.css"
import MainContent from "../src/components/MainContent"
import Footer from "../src/components/Footer"
import Product from "./components/Product"
import productsData from "../src/components/ProductsData"
// function App() {

//     const productComponents = productsData.map(product => <Product key={product.id} 
//         product={product} />)

//     return (
//     <div className="container">
//         <MainContent />
//         {productComponents}
//         <Footer />
//     </div>
//     )
// }

// class App extends React.Component {
//     render() {
//         const productComponents = productsData.map(product => <Product key={product.id} 
//             product={product} />)
//         return (
//         <div className="container">
//             <MainContent />
//             {productComponents}
//             <Footer />
//         </div>
//         )
//     }
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Danish"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "DanShafi",
        }
    }

    render() {
        return (
            <header>
                <p>Welcome, {this.state.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
            return (
                <div>
                    <h1>Hello, it's {hours}:00PM.</h1>
                </div>
        )
    }
}

export default App

