import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState} from "react";

function Main() {
  const[lat, setLat] = useState([]);
  const[long, setLong] = useState([]);
  const[query, setQuery] = useState([]);
  const[value,handleChange,reset] = useInputHook("");
  const apiKey = "7b38de6a6fa08f51ab08ef36085004d5"
  const getData = async () =>{
    const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${apiKey}`);
    setQuery(res.data);
    query.map(p=>(
      setLat(p.lat)
    ))
    query.map(p => (
      setLong(p.lon)
    ))
    console.log(lat)
    console.log(long)
  }

  const getTemp = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
    console.log(res.data);
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
          getData()
          getTemp();
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="search"
          placeholder="Search"
        />
      </form>
      <h1>{}</h1>
    </>
  );
}

export default Main;
