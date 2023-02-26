import { useState, useContext } from "react";
import { DataContext } from "../context/context";
import "../css/updateUser.css";

function UpdateUser({ value, isEdit }) {
  const [newUser, setNewUser] = useState(value.user);

  const { updateUser } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newUser, value.key);
    isEdit(false);
    window.location.reload();
  };

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  return (
    <form
      className="d-flex flex-wrap flex-sm-nowrap justify-content-center align-items-center p-2 w-75 container-update"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control form-update"
        onChange={handleChange}
        value={newUser}
        autoCorrect="of"
      />
      <button className="btn btn-primary">update</button>
    </form>
  );
}

export default UpdateUser;
