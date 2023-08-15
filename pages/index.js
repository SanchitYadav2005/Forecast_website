import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/main.module.css";
import useInputState from "./hooks/useInputState";
import { motion } from "framer-motion";

let assinged = "London";
let _api = `https://api.weatherapi.com/v1/current.json?key=67ca48d558fa4143a9600726230708&q=${assinged}&aqi=no`;

function Home({ data }) {
  // const [value, handleChange, reset] = useInputState("");
  const [value, setValue] = useState("");
  const handleChange = (e) =>{
    setValue(e.target.value);
  }
  const reset = () =>{
    setValue("");
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.navbar}>
          <h1 className={styles.heading}>{data.location.name}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            <input
              className={styles.search}
              type="text"
              placeholder="search"
              onChange={handleChange}
              value={value}
            />
            
          </form>
        </nav>
        <motion.div className={styles.card}>
          <img className={styles.icon} src={data.current.condition.icon} />
          <h3 className={styles.condition}>{data.current.condition.text}</h3>
          <h2 className={styles.temp}>{data.current.temp_c} <sup>°</sup>C</h2>
          <h4 className={styles.temp}>Humidity - {data.current.humidity}</h4>
          <h4 className={styles.temp}>Wind - {data.current.wind_kph} kph</h4>
          <h4 className={styles.cloud}>Clouds - {data.current.cloud}%</h4>
        </motion.div>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await axios.get(_api);
  const { data } = res;
  return { data: data };
};

export default Home;
