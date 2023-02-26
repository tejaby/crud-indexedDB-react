import { createContext } from "react";
import openDataBase from "../database/DataBase";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const addUser = async (value) => {
    const db = await openDataBase();
    const transaction = db.transaction("usuarios", "readwrite");
    const objectStore = transaction.objectStore("usuarios");
    const request = objectStore.add(value);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve("Se agrego el objeto con éxito");
      };

      request.onerror = () => {
        reject("Ocurrió un error al agregar el objeto");
      };
    });
  };

  const readUsers = async () => {
    const db = await openDataBase();
    const transaction = db.transaction("usuarios", "readonly");
    const objectStore = transaction.objectStore("usuarios");
    const cursor = objectStore.openCursor();

    const users = [];

    return new Promise((resolve, reject) => {
      cursor.onsuccess = () => {
        if (cursor.result) {
          users.push({ key: cursor.result.key, user: cursor.result.value });
          cursor.result.continue();
        } else {
          console.log("Se han leido los datos con éxito");
          resolve(users);
        }
      };
      cursor.onerror = () => {
        reject("Ocurrió un error al leer los datos");
      };
    });
  };

  const updateUser = async (value, key) => {
    const db = await openDataBase();
    const transaction = db.transaction("usuarios", "readwrite");
    const objectStore = transaction.objectStore("usuarios");
    const request = objectStore.put(value, key);
    return new Promise((resolve, reject) => {
      request.onsuccess = (e) => {
        resolve("Se actualizo el objeto con éxito");
      };
      request.onerror = (e) => {
        reject("Ocurrió un error al actualizar el objeto");
      };
    });
  };

  const deleteUser = async (key) => {
    const db = await openDataBase();
    const transaction = db.transaction("usuarios", "readwrite");
    const objectStore = transaction.objectStore("usuarios");
    const request = objectStore.delete(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = (e) => {
        resolve("Se eliminó el objeto con éxito");
      };

      request.onerror = (e) => {
        reject("Ocurrió un error al eliminar el objeto");
      };
    });
  };

  return (
    <DataContext.Provider
      value={{ addUser, readUsers, updateUser, deleteUser }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
