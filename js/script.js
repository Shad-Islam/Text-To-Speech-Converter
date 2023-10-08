let voices = [];
let speech = new SpeechSynthesisUtterance();
const input = document.querySelector("#input-text");
const button = document.querySelector("#listen-btn");
const SelectVoice = document.querySelector("#select-voice");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (SelectVoice.options[i] = new Option(voice.name, i))
  );
};

SelectVoice.addEventListener("change", () => {
  speech.voice = voices[SelectVoice.value];
});

button.addEventListener("click", () => {
  speech.text = input.value;
  window.speechSynthesis.speak(speech);
});
