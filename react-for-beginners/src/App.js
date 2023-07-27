import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  console.log("I run all the time");

  // 이렇게 한 번만 호출할 함수는 뭐가 있을까?  -- 예) API 호출
  useEffect(() => {
    console.log("I run only once!");
  }, []);

  useEffect(() => {
    // console.log("Search for", keyword);
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>Welcome, I'm a Counter</h1>
      <p style={{ color: "blue" }}>Counting: {counter}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
