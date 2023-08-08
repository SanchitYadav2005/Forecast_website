import Form from "./components/Form";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Form/>
      <Component {...pageProps} />
    </>
  )
}
