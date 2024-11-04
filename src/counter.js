export { incrementCounter, getCounter };

function getCounter() {
  return localStorage.getItem("objectCounter")
    ? parseInt(localStorage.getItem("objectCounter"))
    : 0;
}

function incrementCounter() {
  let currentCounter = getCounter();
  localStorage.setItem("objectCounter", currentCounter + 1);
  return currentCounter + 1;
}
