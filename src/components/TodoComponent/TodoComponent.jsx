import React, { useState } from "react";
import "./TodoComponent.css";
import TodoList from "../TodoList/TodoList";

const TodoComponent = () => {
  const [inputList, setInputList] = useState("");
  const [enteredList, setEnteredList] = useState([]);
  const [displayError, setDisplayError] = useState("");

  const randomColor = ["white", "red", "yellow", "blue", "orange", "#FF1178", "#1AD617", '#01FFF4'];
  const randomIndex = Math.floor(Math.random() * randomColor.length);

  // function when user types something.

  const searchBar = (event) => {
    setInputList(event.target.value);
  };

  // function with two outcomes: a list gets created when user entered the input. Or alternatively, an error is displayed.

  const addList = (event) => {
    event.preventDefault();
    if (!inputList) {
      setDisplayError("The input must not be empty!");
      setTimeout(() => setDisplayError(""), 5000);
      return;
    }

    const newList = {
      id: Math.floor(Math.random() * 100000),
      value: inputList,
      color: randomColor[randomIndex],
    };

    setEnteredList((prev) => [...prev, newList]);
    setInputList("");
  };

  // function that allows the user to delete a list when the button is clicked.

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
      <TodoList onAddedList={enteredList} onDeletedList={deleteList} />
    </div>
  );
};

export default TodoComponent;
