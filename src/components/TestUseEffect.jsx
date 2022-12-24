import { useEffect, useState } from "react";

function TestUseEffect(props) {
    const [count,setCount]=useState(0)
    const [num,setNum]=useState(0)

    useEffect(()=>{
        console.log('count',count)
    },[count])

    useEffect(()=>{
        console.log('num',num)
    },[num])


    function countAdd(){
        setCount(count+1)
    }

    function numAdd(){
        setNum(num+1)
    }

    return (
        <div>
           <p>Count {count}</p>
           <p>Num {num}</p>
           <button onClick={countAdd}>Click count</button>
           <button onClick={numAdd}>Click num</button>
        </div>
    )
}

export default TestUseEffect;