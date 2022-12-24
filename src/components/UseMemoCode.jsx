import {useState,useMemo } from "react";

function UseMemoCode() {
const [count,setCount]=useState(0)
const [item,setItem]=useState(10)

const multicoutmemo=useMemo(function mulitCount(){
    console.log('call mulitCount')
    return count*5;
},[count])


  return (
    <>
    <h2>Count: {count}</h2>
    <h2>Item: {item}</h2>
    <h2>Item11: {multicoutmemo}</h2>
    <button onClick={()=>setCount(count + 1)}>Call me</button>
    <button onClick={()=>setItem(item*10)}>Call me 2 </button>
    </>  
  );
}

export default UseMemoCode;
