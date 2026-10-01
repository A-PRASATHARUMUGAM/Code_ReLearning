import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const [proper, setProper] = useState({ fname: "Prasath", age: "22" });

    const changebtn = () => {
        setProper((prev) => ({
            ...prev,
            fname: "Kandhan",
            age: "20",
        }));
    };

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count == 0) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <>
            <section className="text-white">
                <button onClick={increment}>+</button>

                <div>Counter {count}</div>

                <button onClick={decrement}>-</button>

                {/*  */}

                <p>Name: {proper.fname}</p>
                <p>age: {proper.age}</p>

                <button onClick={changebtn}>Change</button>
            </section>
        </>
    );
};

export default Counter;
