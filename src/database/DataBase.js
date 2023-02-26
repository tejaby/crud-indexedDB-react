const openDataBase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("dataBase", 1);

    request.onerror = () => {
      reject("Error al abrir la base de datos");
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      const objectStore = db.createObjectStore("usuarios", {
        autoIncrement: true,
      });
    };
  });
};

export default openDataBase;
