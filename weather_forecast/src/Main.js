import axios from "axios";
import useInputHook from "./hooks/useInputHook";
import "./main.css";
import { useEffect, useState} from "react";
import Weather from "./Weather";

const Main = () =>{

  const[lat, setLat] = useState([]);
  const[long, setLong] = useState([]);
  const[query, setQuery] = useState([]);
  const[data, setData] = useState([]);
  const[value,handleChange,reset] = useInputHook("");
  const apiKey = "7b38de6a6fa08f51ab08ef36085004d5";

  useEffect(()=>{

    const getData = async () => {
      
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${apiKey}`);
      setQuery(response.data);
      console.log(query)
      query.map(q=>(
        setLat(q.lat)
      ))
      query.map(q=>(
        setLong(q.lon)
      ))
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
      setData(res.data);
      console.log(data)
    }
    getData();
  });
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();

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
      <Weather weatherData={data}/>
    </>
  );
}

export default Main;
