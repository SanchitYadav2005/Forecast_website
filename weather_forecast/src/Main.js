import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState } from "react";

function Main() {
  const [data, setData] = useState("");
  const [value, handleChange, reset] = useInputHook("");
  async function getData() {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=67ca48d558fa4143a9600726230708&q=${value}&aqi=no`
    );
    const { data } = res;
    setData(data);
    // console.log(data.location.name)
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
          getData();
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="search"
        />
      </form>
      <h1>{}</h1>
    </>
  );
}

export default Main;
