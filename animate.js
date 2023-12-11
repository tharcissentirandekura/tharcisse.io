const headingElement = document.getElementById('auto-typing');
const text = "Tharcisse Ntirandekura";
let index = 0;

function type() {
  headingElement.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }

  setTimeout(type, 200); // Adjust the typing speed (in milliseconds) as needed
}

type();