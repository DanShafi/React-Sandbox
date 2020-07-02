import React from "react"
import Stylesheet from "../src/style.css"
import MainContent from "../src/components/MainContent"
import Footer from "../src/components/Footer"
import Product from "./components/Product"
import productsData from "../src/components/ProductsData"

function App() {

    const productComponents = productsData.map(product => <Product key={product.id} 
    product={product} />)

    return (
    <div className="container">
        <MainContent />
        {productComponents}
        <Footer />
    </div>
    )
}

export default App

