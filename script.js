const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle_icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text_box");

// Dark or Light Images
function imageMode(color) {
  image1.src = `./imgs/undraw_ideas_${color}.svg`;
  image2.src = `./imgs/undraw_code_thinking_${color}.svg`;
  image3.src = `./imgs/undraw_feeling_proud_${color}.svg`;
}

function bgMode(color1, color2) {
  nav.style.backgroundColor = `${color1}`;
  textBox.style.backgroundColor = `${color2}`;
}

// darkMode Function
function darkMode() {
  bgMode("rgb(0 0 0 /50%)", "rgb(255 255 255 /50%)");
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// lightMode Function
function lightMode() {
  bgMode("rgb(255 255 255 /50%)", "rgb(0 0 0 /50%)");
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
