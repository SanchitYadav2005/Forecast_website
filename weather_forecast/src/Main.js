import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState } from "react";
import Weather from "./Weather";
// import { motion } from "framer-motion";
import Error from "./Error";

const Main = () => {
  const [data, setData] = useState([]);
  const [value, handleChange, reset] = useInputHook("");
  const apiKey = "67ca48d558fa4143a9600726230708";

  const handleClick = async () => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no`
      );
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
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
        <button className="btn" onClick={handleClick}>
          <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" />
        </button>
      </form>
      {typeof data.main !== "undefined" ?(
        <Weather weatherData={data}/>
      ):(
        <Error/>
      ) }
    </>
  );
};

export default Main;
