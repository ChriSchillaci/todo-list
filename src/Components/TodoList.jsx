import React, { useState } from "react";
import "./TodoList.css";
import ListMaker from "./ListMaker";

const TodoList = () => {
  const [inputList, setInputList] = useState("");
  const [enteredList, setEnteredList] = useState([]);
  const [displayError, setDisplayError] = useState("");
  const [generateColor, setGenerateColor] = useState(0); //qui

  const randomColor = ["white", "red", "yellow", "blue", "pink", "green"]; //qui

  const searchBar = (event) => {
    setInputList(event.target.value);
  };

  const addList = (event) => {
    event.preventDefault();
    if (!inputList) {
      setDisplayError("The input must not be empty!");
      setTimeout(() => setDisplayError(""), 5000);
      return null;
    }

    const newList = {
      id: Math.floor(Math.random() * 100000),
      value: inputList
    };

    setEnteredList((prev) => [...prev, newList]);
    setInputList("");
    setGenerateColor(Math.floor(Math.random() * randomColor.length)) //qui

  };

  const deleteList = (id) => {
    const filteredList = enteredList.filter((el) => el.id !== id);
    setEnteredList(filteredList);
  };

  return (
    <div className="box">
      <div className="error-text">{displayError}</div>
      <form type="submit" onSubmit={addList}>
        <div className="input-button">
          <input
            type="text"
            placeholder="Add a list..."
            value={inputList}
            onChange={searchBar}
          />
          <button className="button-add" onClick={addList}>
            Add
          </button>
        </div>
      </form>
      <ListMaker
        onGeneratedColor={randomColor[generateColor]} //qui
        onAddedList={enteredList}
        onDeletedList={deleteList}
      />
    </div>
  );
};

export default TodoList;
