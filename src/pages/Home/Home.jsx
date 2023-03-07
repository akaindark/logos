import React, { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Home = () => {
  const { count, setCount } = useContext(CustomContext);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        +
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} type="button">
        -
      </button>
    </div>
  );
};

export default Home;
