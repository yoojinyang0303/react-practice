import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }

    // Add To Do 클릭 시, "함수" 이용하여 투두리스트에 toDo 담기
    setToDos((currArray) => [toDo, ...currArray]);

    // Add To Do 후, input에 있는 toDo 값 reset
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List</h1>
      <h3>to Dos: {toDos.length}</h3>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
