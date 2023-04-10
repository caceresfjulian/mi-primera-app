import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const fibonacci = (num) => {
    if (num < 2) {
      return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const fibonacciNum = useMemo(() => fibonacci(count), [count]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>{fibonacciNum}</h2>
      {showMessage && <span>Showing message</span>}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setShowMessage((s) => !s)}>Toggle</button>
    </div>
  );
};

export default App;
