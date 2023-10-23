import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import {BsCheck2} from "react-icons/bs"
import "./rides.css";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { CityContext } from "../../Context/Context";
import { HiOutlineDownload } from "react-icons/hi";
import {RideData} from "../../data/Ridedata.js"
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import Dateslots from "../Dates/Dateslots";
import {FaSortAmountUpAlt} from "react-icons/fa"
import RideComp from "../RidesDetails/RideComp";
const Rides = () => {
  const date = new Date();
  const dates = [];
  const startdate = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
  const enddate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const { City, dispatch } = useContext(CityContext);
  const [active,setactive]=useState(startdate)
  const [filterdata,setfilter]=useState(RideData)
  const [daytime,setdaytime]=useState(false)
  const [late,setlate]=useState(false)
  const [state, setState] = useState({
    date: City.JourneyDate,
    focused: null,
  });
  for (let i = 0; i < 7; i++) {
    if (dates[0]) {
      dates.push(dates[i - 1] + 24 * 60 * 60 * 1000);
    } else {
      dates.push(startdate);
    }
  }
  const handleactive=(c)=>{
    setactive(c)
  }
  useEffect(()=>{
    if(daytime){
      setfilter(RideData.filter((c)=>c.type==="Daytime"))
    }
    else if(late){
      setfilter(RideData.filter((c)=>c.type==="Late"))
    }
    else{
      setfilter(RideData)
    }
  },[daytime,late])
  const handledaytime=()=>{
setdaytime(!daytime)
  }
  const handleLate=()=>{
  setlate(!late)
  }
  return (
    <>
      <Navbar />
      <div className=" w-screen flex justify-center mt-8 flex-col items-center">
        <div className=" flex w-3/4 h-14 ">
          <div className=" border border-slate-400 w-1/4 rounded-xl px-4 pt-1">
            <p className=" text-sm text-slate-500">From</p>
            <input
              value={City.From}
              type="text"
              placeholder="From City"
              className="  outline-none   "
            />
          </div>
          <div className=" border border-slate-400 w-1/4 mx-2 rounded-xl px-4 pt-1">
            <p className=" text-sm text-slate-500">To</p>
            <input
              value={City.To}
              type="text"
              placeholder="From City"
              className="  outline-none  "
            />
          </div>
          <div className=" border border-slate-400 w-1/4 mx-2 rounded-xl px-4 pt-1 flex flex-col justify-center ">
            <p className=" text-sm text-slate-500 ">Journey Date</p>
            <SingleDatePicker
              noBorder
              date={state.date}
              id="your_unique_id"
              onDateChange={(date) => {
                setState((prev) => ({ ...prev, date }));
              }}
              focused={state.focused}
              onFocusChange={({ focused }) =>
                setState((prev) => ({ ...prev, focused }))
              }
              numberOfMonths={1}
            />
          </div>
          <div className="w-1/5">
            <button className=" bg-pink-400 px-4 py-4 w-full  rounded-xl text-white flex justify-center text-lg">
              Search Buses
            </button>
          </div>
        </div>
        <div className="  bg-stone-950 w-full h-10 mt-8 flex justify-center items-center">
          <h1 className=" font-medium text-white">
            zingbus Luxury bus rides at affordable prices
          </h1>
          <button className=" bt1 text-white px-6 ml-2 bg-white py-1 rounded-full">
            Know More
          </button>
        </div>
        <div className=" h-12 flex w-full justify-center items-center">
          <div className="flex justify-center items-center">
            <img className=" w-10 h-10" src="./zingt1.png" alt="" />
            <h1 className=" text-violet-600 font-medium">zingbus</h1>
          </div>
          <div className="flex justify-center items-center ml-8">
            <BsBookmarkCheckFill color="#18ab1f" size={"1.8rem"} />
            <h1 className=" text-green-500 font-medium">valuebus</h1>
          </div>
        </div>
        <div className="bg-slate-100 w-full flex flex-col items-center justify-center">
          <div className=" w-4/5 flex justify-center items-center mt-4 ">
            <p className=" text-violet-500 mr-4">
              zingbus <span className="text-slate-400">&gt;</span>{" "}
              <span className=" text-slate-600">bus tickets &gt; </span>{" "}
              <span className=" text-slate-600">
                {City.From}-bus-booking-online{" "}
              </span>
              <span className=" text-slate-400"> &gt; </span>
              {City.From} to {City.To}
            </p>
            <button className=" font-semibold text-black px-4 py-2 flex justify-center items-center bg-white ml-4 rounded-lg  ">
              <div className=" bg-sky-600 p-2 rounded-full mr-2 ">
                <HiOutlineDownload color="white" size={"1.5rem"} />
              </div>
              Download the app to get ₹200 OFF on 1st booking
            </button>
          </div>
          <div className=" flex w-9/12  justify-between ">
            <div className=" w-1/5 ">
              <div className=" flex  bg-white flex-col p-4 rounded-lg">
                <div className=" flex justify-between items-center">
                <h1>Vehicle type</h1>
              <p>-</p>
                </div>
              <div className=" flex items-center mt-4">
              <div className=" border rounded-md border-slate-400 w-8 h-8 flex justify-center items-center">
                               
                               </div>
                               <h1 className=" text-base font-medium ml-2 text-slate-600">BUS</h1>
              </div>
              </div>
              <div className=" flex  bg-white flex-col p-4 rounded-lg mt-8">
                <div className=" flex justify-between items-center">
                <h1>Departure Time</h1>
              <p>-</p>
                </div>
              <div className=" flex items-center mt-4">
              <div onClick={()=>handledaytime()} style={{backgroundColor:daytime?"#973EE0":"white"}} className=" border rounded-md border-slate-400 w-8 h-8 flex justify-center items-center">
              <BsCheck2 color='white'/>
                               </div>
                               <h1 className=" text-base font-medium ml-2 text-slate-600">Daytime(6AM-9PM)</h1>
              </div>
              <div className=" flex items-center mt-4">
              <div onClick={()=>handleLate()} style={{backgroundColor:late?"#973EE0":"white"}} className=" border rounded-md border-slate-400 w-8 h-8 flex justify-center items-center">
              <BsCheck2 color='white'/>
                               </div>
                               <h1 className=" text-base font-medium ml-2 text-slate-600">Late(9PM-12AM)</h1>
              </div>
              </div>
    
            </div>
            <div className="w-3/4  ">
              <div className=" w-full flex bg-white rounded-md mt-3 border h-20 justify-around py-3">
                {dates.map((c) => (
                  <div onClick={()=>handleactive(c)} className="h-full">
                    <Dateslots active={active} data={c} />
                  </div>
                 
                ))}
              </div>
              <div className=" flex h-11 bg-white mt-4 px-4  items-center rounded-lg py-2">
                <div className="flex justify-center items-center">
                  <h1 className=" font-semibold">Sort By:</h1>
                </div>
                <div className=" flex justify-center items-center ml-20">
                  <h1 className=" font-semibold mr-2">Departure Time</h1>
                  <FaSortAmountUpAlt color="#973EE0"/>
                </div>
                <div className=" flex justify-center items-center ml-20">
                <h1 className=" font-semibold mr-2">Arrival Time</h1>
                <FaSortAmountUpAlt color="#973EE0"/>
                </div>
                <div className=" flex justify-center items-center ml-20">
                <h1 className=" font-semibold mr-2">Price</h1>
                <FaSortAmountUpAlt color="#973EE0"/>
                </div>
              </div>
              <div className="w-full">
               {filterdata.map((c)=><RideComp data={c}/>)}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Rides;
