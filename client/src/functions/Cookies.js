export const setCookie = (...args) => {
  for (let arg in args) {
    localStorage.setItem(args[arg][0], args[arg][1]);
  }
};

export const deleteCookies = () => {
  const items = ["username", "token", "name"];
  for (let item in items) {
    localStorage.removeItem(items[item]);
  }
};
