import { useState, useEffect } from "react";

function TodoList() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const addButton = () => {
    setData([value, ...data]);
  };
  const deteteButton = () => {
    var array = [...data];
    var index = Object.keys(array);
    if (index !== -1) {
      array.shift(index, 1);
      setData(array);
    }
    setValue([array])
  };

  useEffect(() => {});

  return (
    <div>
        <h3>Add Task</h3>
      <input type="text" placeholder="Entr your task here" onChange={(e) => setValue(e.target.value)} />
      <button onClick={addButton}>Add Task</button>
      <button onClick={deteteButton}>Delete Task</button>
      <ul>
        {data.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;