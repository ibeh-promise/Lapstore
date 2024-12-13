const flexSwitchCheckChecked = document.getElementById("flexSwitchCheckChecked");
const body = document.body;
const links = document.querySelectorAll("a");
const paragraphs = document.querySelectorAll("p");
const header1 = document.querySelectorAll("h1");
const actives = document.querySelectorAll(".actives");
const spans = document.querySelectorAll("span");
const navs = document.querySelectorAll("nav");
const divs = document.querySelectorAll("div");

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Event listener for the toggle switch
flexSwitchCheckChecked.addEventListener("change", () => {
  const currentTheme = body.classList.contains("bg-dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// Function to apply the theme
function applyTheme(theme) {
  if (theme === "light") {
    body.classList.replace("bg-dark", "bg-light");
    body.classList.replace("text-light", "text-dark");
    links.forEach(link => link.classList.replace("text-secondary", "text-dark"));
    paragraphs.forEach(p => p.classList.replace("text-light", "text-dark"));
    header1.forEach(p => p.classList.replace("text-light", "text-dark"));
    spans.forEach(span => span.classList.replace("text-light", "text-dark"));
    navs.forEach(p => p.classList.replace("bg-dark", "bg-light"));
    navs.forEach(p => p.classList.replace("text-light", "text-dark"));
    divs.forEach(p => p.classList.replace("bg-dark", "bg-light"));
    flexSwitchCheckChecked.checked = false; // Sync toggle state
  } else {
    body.classList.replace("bg-light", "bg-dark");
    body.classList.replace("text-dark", "text-light");
    links.forEach(link => link.classList.replace("text-dark", "text-secondary"));
    paragraphs.forEach(p => p.classList.replace("text-dark", "text-light"));
    header1.forEach(p => p.classList.replace("text-dark", "text-light"));
    spans.forEach(span => span.classList.replace("text-dark", "text-light"));
    actives.forEach(p => p.classList.replace("text-dark", "text-light"));
    navs.forEach(p => p.classList.replace("bg-light", "bg-dark"));
    navs.forEach(p => p.classList.replace("text-dark", "text-light"));
    divs.forEach(p => p.classList.replace("bg-light", "bg-dark"));
    flexSwitchCheckChecked.checked = true; // Sync toggle state
  }
}
