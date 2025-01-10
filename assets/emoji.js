const emojis =["😁", "😂", "😅", "😉", "😎", "😍", "😜", "😀"];
const body = document.body;
emojis.forEach((emoji, index) => {
  const span = document.createElement("span");
  span.className = "emoji";
  span.textContent = emoji;
  span.style.left = `${Math.random() * 100}vw`;
  span.style.top = `${Math.random() * 100}vh`;
  span.style.animationDelay = `${Math.random() * 5}s`;
  body.appendChild(span);
});
