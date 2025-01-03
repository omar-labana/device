export default () => {
  const navigator = typeof window !== "undefined" && window.navigator;
  if (!navigator) {
    return;
  }
  for (const key in navigator) {
    // log the key and value if the value is a function
    if (typeof navigator[key] === "function") {
      console.log(key, navigator[key]);
    }
  }
};
