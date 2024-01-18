import React, { useEffect, useState } from "react";
import withAuthentication from "../HOC/WithAuth";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Terender {count}</p>
    </div>
  );
};

export default withAuthentication(Count);
