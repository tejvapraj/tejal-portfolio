const words = ["interactive websites.", "modern UIs.", "clean code."];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    document.querySelector(".typing").textContent = currentWord;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
  }
}

type();
