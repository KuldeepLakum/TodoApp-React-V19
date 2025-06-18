// Key used in localStorage
const todoKey = "Todo-App";

// Get data from localStorage and parse it
export const getlocalStorageTodoData = () => {
  const rawsTodo = localStorage.getItem(todoKey);
  if (!rawsTodo) return [];
  return JSON.parse(rawsTodo);
};

// Save task array to localStorage
export const setlocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
