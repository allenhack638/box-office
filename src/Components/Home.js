import React, { useState } from "react";

const Home = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setinputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default Home;
