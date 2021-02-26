export const getFromLocalStorage = (key) => {
  let value = window.localStorage.getItem(key);
  if(value) {
    return JSON.parse(value)
  }
}

export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}