import {useState} from 'react';

function StateUseFunc() {
    const [name,setName]=useState('Suraj')
    function updateName(){
        setName('Hayat')
    }

    return(
        <div>
            <h3>{name}</h3>
            <button className='' onClick={updateName}>Change the name Using Function Comp</button>
        </div>        
    )
}

export default StateUseFunc;