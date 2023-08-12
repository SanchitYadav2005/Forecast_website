import Form from "./components/Form";
import '@/styles/globals.css'
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Form />
      <Component {...pageProps} />
    </motion.div>
      
    </>
  );
}
