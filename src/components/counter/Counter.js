import "./Counter.css"
import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Increase the count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
