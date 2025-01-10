const input = document.getElementById("input");
const button = document.getElementById("btn");
const ulElement = document.getElementById("list");
const url = "https://icanhazdadjoke.com/search?term=";
function focus() {
  input.focus();
  input.value = "";
}
focus();
//===finde joke====
function findJoke() {
  let value = input.value.trim();
  if (value.length < 1 || !value) {
    alert("please insert correct text");
    focus();
    return;
  }
  const newURL = url + value;
  getData(newURL);
  console.log(newURL);
}
//===== Get Data =========
async function getData(newURL) {
  ulElement.innerHTML = "please waite loading...";
  try {
    const response = await fetch(newURL, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (data.results.length === 0) {
      alert("please try another word");
    }
    render(data);
    focus();
  } catch (e) {
    alert("Error: " + e.message);
    focus();
  }
}
//===== Render ========
function render(data) {
  ulElement.innerHTML = "";
  data.results.forEach((joke) => {
    const li = document.createElement("li");
    li.textContent = joke.joke;
    ulElement.appendChild(li);
  });
}
//====== queue =====
button.addEventListener("click", findJoke);
input.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    findJoke();
  }
});
