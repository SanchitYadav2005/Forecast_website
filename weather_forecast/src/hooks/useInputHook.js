import { useState } from "react";

export default  useInputHook = initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = () => {
        setValue(value);
    }
    const reset = () => {
        setValue("");
    }
    return [value, handleChange, reset];
}