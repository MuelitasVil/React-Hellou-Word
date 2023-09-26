import React from "react"
import ReactDom from "react-dom/client"
import { Greeting } from "./Greetibg"
import Product from "./Product"

const rootElement = document.getElementById("root")
const root = ReactDom.createRoot(rootElement)

root.render(
    <div> 
        <Greeting title = "asd1"/>
        <Greeting title = "asd2"/>
        <Greeting title = "asd3"/>
        <Greeting title = "asd4"/>
        <Product/>
    </div>
           
)