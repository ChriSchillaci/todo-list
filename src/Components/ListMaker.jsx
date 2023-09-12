import { ImBin2 } from "react-icons/im";
import "./ListMaker.css";

const ListMaker = (props) => {
  return (
    <ul>
      {props.onAddedList.map((el) => {
        return (
          <li
            key={el.id}
            style={{ border: `3px solid ${props.onGeneratedColor}` }}>
            <p>{el.value}</p>
            <button
              className="delete-button"
              onClick={() => props.onDeletedList(el.id)}
            >
              <ImBin2 className="bin-icon" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMaker;
