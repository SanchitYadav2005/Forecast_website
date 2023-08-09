import Form from "./components/Form";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Form />
      <Component {...pageProps} />
    </>
  );
}
