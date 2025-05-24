const phrases = [
  "Software Engineer",
  "Java Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
const typedText = document.querySelector('.typed-text');

function type() {
  if (charIndex < phrases[index].length) {
    typedText.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
