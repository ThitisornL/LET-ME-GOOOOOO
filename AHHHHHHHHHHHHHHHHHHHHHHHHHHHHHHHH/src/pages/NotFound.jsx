import React ,{useEffect, useState}from 'react'
import {useNavigate} from "react-router"

function Notfound () {
        const [count,setCount]=useState(5)
    const navigate = useNavigate ()
    useEffect(()=>{
        setTimeout(()=>setCount(count -1),1000)
        if (count == 0)navigate("/")
        
    },[count])
  return (
    <div>GO BACK NIGGER{count}</div>
  )
}

export default Notfound