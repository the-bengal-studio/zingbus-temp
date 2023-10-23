import React, { useState } from 'react'
import { boardingpoint } from '../../data/boardingPoint'
import { dropPoint } from '../../data/dropPoint'
import {BsCheck2} from "react-icons/bs"
import Seats from '../Seat/Seats'
const RideComp = ({data}) => {
    const [open,setopen]=useState(true)
  return (
    <div className=' w-full  bg-white my-4 rounded-xl'>
        <div className=" w-full flex justify-between px-4 py-4 ">
            <div className=" flex w-1/2 justify-between ">
                <h1 className=' text-2xl text-slate-800 '>{data.starttime}</h1>
                <div className="  flex flex-col justify-center items-center">
                    <div className=""> <h1 className=' text-xs'>{data.traveltime}</h1></div>
                    
                    <div className=" flex justify-center items-center mt-2"><div className=" w-1 h-1 rounded-full bg-slate-400"></div>
                    <hr style={{height:"1px"}} className=' text-slate-800 bg-slate-100 w-28' />
                    <div className=" w-1 h-1 rounded-full bg-slate-400"></div></div>

                </div>
                <h1 className='text-2xl text-slate-800 '>{data.endtime}</h1>
            </div>
            <div className=" w-1/2 flex justify-end"><h1 className=' font-bold text-3xl text-violet-600'>{data.price}</h1></div>
        </div>
        <div className="w-full  px-4 mt-4">
            <h1 className=' font-medium text-slate-800'>{data.name}</h1>
        </div>
        <div className="w-full flex justify-end px-4 mt-2">
            <h1>{data.seats} Seats left</h1>
        </div>
        <hr className=' w-2/3 mx-auto' />
        <div className=" w-full flex justify-between px-4 mt-2 pb-6">
            <div className=" flex w-1/2 justify-between items-center">
                <h1 className=' text-violet-600 text-lg'>Amenities</h1>
                <h1 className=' text-violet-600 text-lg'>Timeline</h1>
                <h1 className=' text-violet-600 text-lg'>Cancellation policy</h1>
            </div>
          <div onClick={()=>setopen(!open)} className=" w-1/2 flex justify-end">
            {open?<button className=' bg-violet-600 w-max px-12 text-lg py-2 rounded-xl text-white '>Select Seat</button>:<button className=' bg-violet-600 w-max px-12 text-lg py-2 rounded-xl text-white '>Hide Seat</button>}

          </div>
        </div>
        <div style={{display:open?"none":"flex"}} className=" h-max  bg-slate-200 w-full justify-around rounded-xl">
                <div className="w-2/6 ">
                    <div className=" w-full bg-white h-96 my-4 rounded-xl">
                        <div className=" flex justify-between items-center ml-3 ">
                        <h1 className=' font-semibold text-slate-700 py-4'>Boarding Point</h1>
                        <p>-</p>
                        </div>
                        
                        <hr />
                        <div className=" mx-1 bg-slate-300 px-4 py-2 ">
                            <h1 className=' text-sm text-violet-600'>Select Nearest Boarding Point according to your current location</h1>
                        </div>
                        <div className="">
                            {boardingpoint.map((c)=> <div className=" flex items-center my-2 ml-3">
                                <div style={{backgroundColor:c.type?"#973EE0":"white"}} className=" border rounded-md border-slate-400 w-8 h-8 flex justify-center items-center">
                                {c.type&&<BsCheck2 color='white'/>}
                                </div>
                                <div className=" flex flex-col ml-3 ">
                                    <h1 className=' font-medium text-slate-700'>{c.City}</h1>
                                    <h1 className=' text-sm '>{c.time}</h1>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className=" w-full bg-white h-96 my-4 rounded-xl">
                    <div className=" flex justify-between items-center ml-3 ">
                        <h1 className=' font-semibold text-slate-700 py-4'>Drop Point</h1>
                        <p>-</p>
                        </div>
                        
                        <hr />
                        <div className=" mx-1 bg-slate-300 px-4 py-2 ">
                            <h1 className=' text-sm text-violet-600'>Select Nearest Drop Point according to your destinationS</h1>
                        </div>
                        <div className="">
                            {dropPoint.map((c)=> <div className=" flex items-center my-2 ml-3">
                                <div style={{backgroundColor:c.type?"#973EE0":"white"}} className=" border rounded-md border-slate-400 w-8 h-8 flex justify-center items-center">
                                {c.type&&<BsCheck2 color='white'/>}
                                </div>
                                <div className=" flex flex-col ml-3 ">
                                    <h1 className=' font-medium text-slate-700'>{c.City}</h1>
                                    <h1 className=' text-sm '>{c.time}</h1>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-3/5 bg-white mt-8 h-max">
                    <div className=" w-full">
                    <Seats/>
                    </div>
                </div>
            </div>
     
    </div>
  )
}

export default RideComp