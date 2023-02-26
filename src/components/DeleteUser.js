import { useContext } from "react";
import { DataContext } from "../context/context";
import "../css/deleteUser.css";

function DeleteUser({ value, isEdit }) {
  const { deleteUser } = useContext(DataContext);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(value.key);
    window.location.reload();
  };

  const handleClick = (e) => {
    e.preventDefault();
    isEdit(true);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center p-2 w-75 container-delete">
      <h5 className="text-user flex-grow-1">{value.user}</h5>
      <div className="btn-container">
        <button className="btn btn-primary btn-update" onClick={handleClick}>
          Update
        </button>
        <button className="btn btn-primary btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteUser;
