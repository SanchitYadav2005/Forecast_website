import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState } from "react";
import Weather from "./Weather";

const Main = () => {
  const [data, setData] = useState([]);
  const [value, handleChange, reset] = useInputHook("");
  const apiKey = "67ca48d558fa4143a9600726230708";

  const handleClick = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no`
    );
    setData(res.data);
    console.log(data)
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
          handleClick();
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="search"
          placeholder="Search"
        />
        <button>Click</button>
      </form>
      <Weather weatherData={data} />
    </>
  );
};

export default Main;
