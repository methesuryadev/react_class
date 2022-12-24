import React from "react";

function PropsWithFunc(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h3>School: {props.school}</h3>
        </div>
    )
}

export default PropsWithFunc;