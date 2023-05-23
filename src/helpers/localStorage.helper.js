const LOCAL_STORAGE_KEY = 'todo:tasks';

export function getData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function insertData(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function deleteData(id) {
  const data = getData();

  const indexToRemove = data.findIndex(todo => todo.id === id);
  if (indexToRemove !== -1) {
    data.splice(indexToRemove, 1);
    insertData(data);
  }
}
