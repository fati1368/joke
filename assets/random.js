const randomBtn = document.getElementById("random");
const urlRandom = "https://icanhazdadjoke.com";

//===== Get Data =========
async function getRandom() {
  ulElement.innerHTML = "please waite loading...";
  try {
    const response = await fetch(urlRandom, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    print(data);
  } catch (e) {
    alert("Error: " + e.message);
  }
}
//===== Render ========
function print(data) {
  ulElement.innerHTML = data.joke;
}
//====== queue =====
randomBtn.addEventListener("click", getRandom);
