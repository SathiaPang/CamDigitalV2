var rotatingText = document.getElementById("rotating-text");
var texts = ["Take business to new Heights",
            "Best Guide To The Marketing World", 
            "Ready For Lift off"];
var currentTextIndex = 0;
var currentCharacterIndex = 0;
var delay = 100; // Delay between each character in milliseconds

function typeText() {
  var text = texts[currentTextIndex];
  rotatingText.innerHTML = text.substring(0, currentCharacterIndex) + "|";
  currentCharacterIndex++;
  if (currentCharacterIndex > text.length) {
    currentCharacterIndex = 0;
    currentTextIndex++;
    if (currentTextIndex == texts.length) {
      currentTextIndex = 0;
    }
    setTimeout(typeText, 2000);
  } else {
    setTimeout(typeText, delay);
  }
}
typeText();



