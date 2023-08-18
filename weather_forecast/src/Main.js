import axios from "axios";
import useInputHook from "./hooks/useInputHook";

function Main() {
  const [value, handleChange, reset] = useInputHook("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        <input value={value} onChange={handleChange} type="text" />
      </form>
      <h1>{value}</h1>
    </>
  );
}

export default Main;
