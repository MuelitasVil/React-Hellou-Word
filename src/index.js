import React from "react"
import { useState, useEffect } from "react"
import ReactDom from "react-dom/client"
import { Greeting } from "./Greetibg"
import Product from "./Product"
import { Button } from "./Button"
import { TaskCards } from "./Task"
import { Posts } from "./Post"

const rootElement = document.getElementById("root")
const root = ReactDom.createRoot(rootElement)

function Counter() {

    const [counter, setCounter] = useState(0);

    return ( 
    <div>
        <h1> Counter : {counter} </h1>
        <button onClick={() => setCounter(counter + 1)}> sumar </button>
    </div>

    

    );
    
}

function Message() {

        const [message, setMessage] = useState()
        const [counteer, setCounter] = useState(0)

        useEffect(() => {
            console.log("Render")
        }, [ counteer ])

        return (
            <div>
                <input onChange={e => setMessage(e.target.value)}/>
                <button onClick={() => alert("el mensaje es : " + message)}>
                    Save
                </button>

                <hr/>

                <h1> counter : {counteer }</h1>
                <button onClick={() => setCounter(counteer + 1)}>
                    incrementar
                </button>
            </div>
        );
}

const users = [
    {
        id : 1,
        name : "Manuel",
        image : "https://robohash.org/user1"
    },
    {
        id : 2,
        name : "Manuel2",
        image : "https://robohash.org/user1"
    }
]

root.render(
    <div> 
        
        <Button text = "Click me"/>
        <TaskCards/>
        <Greeting title = "asd1"/>
        <Greeting title = "asd2"/>
        <Greeting title = "asd3"/>
        <Greeting title = "asd4"/>
        <Product/>
        <Posts/>

        <div>
        {
            users.map(
                (user, i) => {
                return (<div><h1 key = {i} >{ user.name }</h1> <img src = {user.image}/></div>);
            })
        }
        </div>

        <Counter/>
        <Message/>

    </div>
           
)