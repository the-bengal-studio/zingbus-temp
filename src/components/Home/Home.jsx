import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import React, { useContext, useState } from "react";
import { CityContext } from "../../Context/Context";
import Navbar from "../Navbar/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const date = new Date();
  const { City, dispatch } = useContext(CityContext);
  const navigate = useNavigate();
  console.log(date);
  const [state, setState] = useState({
    date: null,
    focused: null,
  });
  const handleChange = (e) => {
    dispatch({ type: e.target.id, payload: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className=" w-screen h-screen flex justify-center mt-8 -z-10">
        <div className=" w-4/5 h-full ">
          <div className="w-full h-2/3 relative flex justify-center">
            <img
              className=" w-full h-full bg-cover rounded-3xl"
              src="./wc23.png"
              alt=""
            />
            <div className="det-1 w-4/5 bg-white h-32 absolute -bottom-16 rounded-3xl flex items-center">
              <div className=" flex flex-col w-max mt-8 ml-4  h-full ">
                <div className=" flex items-center">
                  <div className=" bg-slate-200 flex justify-center items-center rounded-full p-1">
                    <IoLocationOutline color=" #2256f2" size={".9rem"} />
                  </div>

                  <h1 className=" text-2xl ml-2 text-slate-800">From City</h1>
                </div>
                <input
                  type="text"
                  id="From"
                  onChange={handleChange}
                  placeholder="From City"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  className=" text-slate-500 outline-none  p-2 ml-8 mt-4"
                />
              </div>
              <div className="  border border-l-slate-300 h-2/3 ml-8 "></div>
              <div className=" flex flex-col w-max mt-8 ml-8  h-full ">
                <div className=" flex items-center">
                  <div className=" bg-slate-200 flex justify-center items-center rounded-full p-1">
                    <IoLocationOutline color=" #2256f2" size={".9rem"} />
                  </div>

                  <h1 className=" text-2xl ml-2 text-slate-800">To City</h1>
                </div>
                <input
                  type="text"
                  id="To"
                  onChange={handleChange}
                  placeholder="To City"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  className=" text-slate-500 outline-none  p-2 ml-8 mt-4"
                />
              </div>
              <div className="  border border-l-slate-300 h-2/3 ml-8 "></div>
              <div className=" flex flex-col w-max mt-8 ml-8  h-full ">
                <div className=" flex items-center">
                  <h1 className=" text-2xl ml-2 text-slate-800">Date</h1>
                </div>
                <div className=" mt-4 ">
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
              </div>

              <button
                onClick={() => {
                  dispatch({ type: "JourneyDate", payload: state.date });
                  navigate("/bustickets");
                }}
                className=" bg-red-400 text-2xl px-8 py-4 text-white ml-10 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
