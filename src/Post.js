import { VscBug } from "react-icons/vsc"

const PedirDatos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

export function Posts() {
    return (
        <button onClick={PedirDatos}>
            <VscBug/>
            Pedir Datos
        </button>
    );
}