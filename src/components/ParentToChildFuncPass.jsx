import { useEffect, useState } from "react";

function ParentToChildFuncPass(props) {
 const uname="suraj"
  return (
    <>
     <button onClick={props.data}>Call me</button>
   <button onClick={()=>props.data2(uname)}>Call me 2</button>
    </>  
  );
}

export default ParentToChildFuncPass;
