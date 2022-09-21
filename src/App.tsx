import "./App.scss";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Rendered!");
  }, []);

  const clickHandler = () => {
    console.log("ran...");
  };

  return (
    <div className="app">
      <h1 onClick={clickHandler}>Welcome!</h1>
    </div>
  );
}

export default App;
