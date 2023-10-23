import React from "react";
import { useState } from "react";
import { weekdays, Months } from "../../data/data";

const Dateslots = ({ data, active }) => {
  const date = new Date(data).getDate();
  const day = new Date(data).getDay();
  const Month = new Date(data).getMonth();
  const [push, setpush] = useState([]);

  return (
    <>
      <div style={{backgroundColor:active===data?"#EF4968":"#EFEFEF"}} className=" flex justify-center items-center flex-col w-24  ml-2 mr-2 rounded-lg h-full ">
        <h1 style={{color:active===data?"white":"gray"}} className=" text-xs font-semibold ">{weekdays[day]}</h1>
        <div className=" flex">
          <h1
            style={{color:active===data?"white":"gray"}}
            className=" flex justify-center items-center text-xs  "
          >
            {date}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dateslots;
