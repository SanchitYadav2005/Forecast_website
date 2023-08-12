import Head from "next/head";
import axios from "axios";
import styles from "../styles/main.module.css";
import Form from "./components/Form";

const assinged = "London";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <nav>
            <h1>{data.location.name}</h1>
            <Form/>
          </nav>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=67ca48d558fa4143a9600726230708&q=${assinged}&aqi=no`
  );
  const { data } = res;
  return { data: data };
};
