const button = document.querySelector("button");
const input = document.querySelector("textarea");
let text;

button.addEventListener("click", () => {
  text = input;
  console.log(text);
});

// button.addEventListener("click", () => {
//   console.log("Shad");
// });
