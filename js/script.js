let speech = new SpeechSynthesisUtterance();
const button = document.querySelector("button");
const input = document.querySelector("textarea");

button.addEventListener("click", () => {
  speech.text = input.value;
  window.speechSynthesis.speak(speech);
});
