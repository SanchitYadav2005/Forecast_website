import Form from "./components/Form";
import "../styles/main.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Form />
      <Component {...pageProps} />
    </>
  );
}
