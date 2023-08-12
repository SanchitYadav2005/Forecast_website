import { useState } from "react";

export default initialVal => {
    const [value, updateVal] = useState(initialVal);
    const handleChange = e => {
        updateVal(e.targe.value)
    }
    const reset = () => {
        updateVal("")
    }
    return [value, handleChange, reset]
}