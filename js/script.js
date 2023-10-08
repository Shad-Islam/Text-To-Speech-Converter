let speech = new SpeechSynthesisUtterance();
const input = document.querySelector("#input-text");
const button = document.querySelector("#listen-btn");
const SelectVoice = document.querySelector("#select-voice");

button.addEventListener("click", () => {
  speech.text = input.value;
  window.speechSynthesis.speak(speech);
});
