export function Greeting( { title } ) {
    
    const estadoAnimo = false
    const titulo = "Buenos dias por la mañana"
    
    const user = {
        name : "manuel",
        age : 12
    }

    /*
    if (estadoAnimo) {
        return <div>
        <h1>{titulo}</h1>
        <p>Que bonitos dias</p>
    </div>
    } else {
        return <div>
        <h1>{titulo}</h1>
        <p>Que malos dia por la mañana </p>
    </div>
    }
    */

    return <div>
        <h1> {titulo}</h1>
         <p> {estadoAnimo ? "Que bonito dia" : "Que mal dia"} </p>
         <p>{JSON.stringify(user)}</p>
         <p>{ props.title }</p>
         </div>
    
}