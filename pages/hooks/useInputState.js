import { useState } from "react";

export default initialVal => {
    const [value, updateVal] = useState(initialVal);
    const handleChange = e => {
        updateVal(e.target.value)
    }
    const reset = () => {
        updateVal("")
    }
    return [value, handleChange, reset]
}