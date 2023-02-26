import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/context";
import ReadUser from "./ReadUser";

function ReadDB() {
  const { readUsers } = useContext(DataContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    readUsers().then((user) => {
      setUsers(user);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-2 p-2 w-100">
      {users.map((user) => (
        <ReadUser key={user.key} value={user} />
      ))}
    </div>
  );
}

export default ReadDB;
