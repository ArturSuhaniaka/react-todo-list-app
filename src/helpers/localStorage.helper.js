export function getData() {
  const keys = Object.keys(localStorage);
  const storedTodos = [];

  for (let key of keys) {
    storedTodos.push(JSON.parse(localStorage.getItem(key)));
  }
  return storedTodos;
}

export function insertData(todo) {
  localStorage.setItem(todo.id, JSON.stringify(todo));
}

export function deleteData(id) {
  localStorage.removeItem(id);
}
