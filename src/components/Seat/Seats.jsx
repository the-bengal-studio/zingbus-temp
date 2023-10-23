import React, { useState } from 'react'
import {TbSteeringWheel} from "react-icons/tb"
 const Seats = () => {
    const [active,setactive]=useState([])
    var seats=[]
    for(let i=0;i<15;i++){
        seats.push(i)
    }
  return (
    <div className=' relative flex justify-center pl-4 py-4'>
        <div className=" absolute top-6 left-4">
                <TbSteeringWheel size={"2rem"}/>
        </div>
        <div className=" w-11/12 flex flex-wrap ml-4">
        {seats.map((c)=> <div onClick={()=>setactive((prev)=>[...prev,c])} className=" mx-2 my-2">
          <div style={{backgroundColor:active.includes(c)?"#F590B0":"white",borderColor:active.includes(c)?"#EE2967":"black"}} className=" border-2  w-16 h-10 rounded-md flex justify-end items-center hover:bg-slate-600">
            <div style={{borderColor:active.includes(c)?"#EE2967":"black"}} className="border-2   h-4/5 w-2 rounded-lg mr-1 "></div>
          </div>
        </div> )}
        </div>

    </div>
  )
}

export default Seats