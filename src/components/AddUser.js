import { useState, useContext } from "react";
import { DataContext } from "../context/context";
import "../css/addUser.css";

function AddUser() {
  const { addUser } = useContext(DataContext);

  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 0) {
      addUser(user);
      setUser("");
      window.location.reload();
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <form className="d-flex flex-column container-add" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        placeholder="Ingrear nuevo usuario"
        value={user}
        autoCorrect="of"
      />
      <button className="btn btn-primary btn-add">enviar</button>
    </form>
  );
}

export default AddUser;
