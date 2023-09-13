import { ImBin2 } from "react-icons/im";
import "./Task.css";

const Task = (props) => {
  return (
    <li key={props.id} style={{ border: `3px solid ${props.color}` }}>
      <p>{props.value}</p>
      <button
        className="delete-button"
        onClick={() => props.onDeletedList(props.id)}
      >
        <ImBin2 className="bin-icon" />
      </button>
    </li>
  );
};

export default Task;
