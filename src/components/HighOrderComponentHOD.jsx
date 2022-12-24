import React, { useState, useMemo } from "react";

function CountFunction(props) {
  const [count, setCount] = useState(0);
  let background=props.background!=''?props.background:'';
  let width=props.width!=''?props.width:'';
  return (
    <div style={{background:background,width:width}}>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  );
}

export default CountFunction;
