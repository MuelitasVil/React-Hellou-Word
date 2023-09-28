const handlerChange = (e) => {
    console.log(e.target.value)
}

export function Button({text}) {
 
    return( 
        <div>
        <button>
            {text}
        </button>
        <input onChange={handlerChange}/>
        </div>    
    );
}