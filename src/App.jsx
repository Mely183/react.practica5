import React, { useState } from "react";
import Button from "./components/button";
import Item from "./components/item";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");

  function onInputChange(event) {
    setText(event.target.value);
  }

  function addToDo() {
    if (text.trim().length > 0) {
      setToDoList([text, ...toDoList]);
      setText("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addToDo();
    }
  }

  function onDelete(index) {
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
  }

  return (
    <main className="bg-blue-500 min-h-screen flex justify-center p-16 ">
      <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
        <input
          className="bg-white/20 p-2 rounded text-white"
          type="text"
          value={text}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button className="bg-white rounded p-2 text-black" onClick={addToDo}>
          Agregar
        </Button>
        {toDoList.map((toDo, index) => (
          <Item
            key={`item-${index}`}
            text={toDo}
            onDelete={() => onDelete(index)}
          />
        ))}
      </div>
    </main>
  );
}
