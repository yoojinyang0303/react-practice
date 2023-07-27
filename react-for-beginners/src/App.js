import { useState, useEffect } from "react";

function Hello() {
  /*
  useEffect(() => {
    console.log("I'm here!");
  }, []);
  */

  /*
  // 아래와 동작 내용은 동일함.
    useEffect(function() {
      console.log("hi :)");
      return function () {
        console.log("bye :(");
      };
    }, []);
  */

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hola 😀</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
