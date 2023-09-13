import "./TodoList.css";
import Task from "../Task/Task";

//component that creates a list with the map method. The list is located in an array called props(enteredList)

const TodoList = (props) => {
  return (
    <ul>
      {props.onAddedList.map(({ id, value, color }, key) => {
        return <Task onDeletedList={props.onDeletedList} id={id} value={value} color={color} key={key} />;
      })}
    </ul>
  );
};

export default TodoList;
