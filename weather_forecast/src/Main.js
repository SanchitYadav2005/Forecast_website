import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useState} from "react";

function Main() {
  const[query, setQuery] = useState([]);
  const[value,handleChange,reset] = useInputHook("");
  const apiKey = "4990e2be0dec0c8e71f7e52dd733e707"
  const getData = async () =>{
    const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${apiKey}`);
    setQuery(res.data);
    const a = query.map(p=>(
      console.log(p.lat)
    ))
    console.log(a)
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
          placeholder="Search"
        />
      </form>
      <h1>{}</h1>
    </>
  );
}

export default Main;
