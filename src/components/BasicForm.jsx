import React, { useState } from "react";

function BasicForm(props){
    const [name,setName]=useState("")
    const [tnc,setTnc]=useState("")
    const [interest,setInterest]=useState("")

    function getFromData(e){
        console.log(name,tnc,interest)
        e.preventDefault()
    }
    function clearForm(e){
        console.log(name,tnc,interest)
        setName("")
        setInterest("")
        setTnc("")
        e.preventDefault()
    }

    return(
        <div>
          <form onSubmit={getFromData}>
            <input type="text" placeholder="Enter a name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>DC</option>
            </select>
            <br/>
            <input type="checkbox" id="" name="" value={setTnc} onChange={(e)=>setTnc(e.target.value)} />
            <label>Accept all conditions</label><br />
            <button type="submit">Submit</button>
            <button onClick={clearForm}>clear</button>
          </form>
        </div>
    )
}

export default BasicForm;