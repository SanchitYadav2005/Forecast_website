import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState } from "react";
import Weather from "./Weather";
import { motion } from "framer-motion";

const Main = () => {
  const [data, setData] = useState([]);
  const [value, handleChange, reset] = useInputHook("");
  const apiKey = "67ca48d558fa4143a9600726230708";

  const handleClick = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no`
    );
    setData(res.data);
  };

  return(
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
          handleClick();
        }}
        className="navbar"
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="search"
          placeholder="Search"
        />
        <button className="btn"><img src="https://cdn-icons-png.flaticon.com/128/149/149852.png"/></button>
      </form>
      
      <div>
      {(typeof data !== "undefined")?(
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      </div>

      </motion.div>
  )

};

export default Main;
