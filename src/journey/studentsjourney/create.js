import {useState} from "react";
export default function Create(){
    const [creates,setCreates]=useState([]);
    const [create,setCreate]=useState("");
    
    
    
    function handleCreate(){

    let createsCopy=[...creates];
    createsCopy.push(create);
    setCreates(createsCopy);


    }
    
    function handleInput(e){
        setCreate(e.target.value);

    }
    
    
    return(
    <div id="todo-form-container"> Students Details
        <div id="form-header">
            <input id="todo" placeholder="enter the Name" onChange={handleInput} />
           



            <button onClick={handleCreate}>Add StudentName</button>




        </div>
        <div id="form-body">
            <ul>
                {creates.map((t, index) => (
                    <li id="a1" key={`todo-list-item-${index}`}> {t}</li>


                ))}

            </ul>
        </div>
    </div>
    );
}
