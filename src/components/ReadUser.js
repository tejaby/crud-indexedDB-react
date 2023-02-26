import { useState } from "react";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

function ReadUser({ value }) {
  const [edit, setEdit] = useState(false);

  const isEdit = (v) => {
    setEdit(v);
  };

  const Update = () => {
    return <UpdateUser value={value} isEdit={isEdit} />;
  };

  const Read = () => {
    return <DeleteUser value={value} isEdit={isEdit} />;
  };

  return <>{edit ? <Update /> : <Read />}</>;
}

export default ReadUser;
