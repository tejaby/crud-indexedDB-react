import AddUser from "./AddUser";
import ReadDB from "./ReadDB";
import "../css/appIndexedDB.css";

export default function AppIndexedDB() {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center justify-content-center componentes mx-auto pt-4">
        <AddUser />
        <ReadDB />
      </div>
    </div>
  );
}
