const flexSwitchCheckChecked = document.getElementById("flexSwitchCheckChecked");
const body = document.body;
const links = document.querySelectorAll("a");
const li = document.querySelectorAll("li");
const paragraphs = document.querySelectorAll("p");
const header1 = document.querySelectorAll(["h1", "h2"]);
const label = document.querySelectorAll("label");
const small = document.querySelectorAll("small");
const actives = document.querySelectorAll(".actives");
const spans = document.querySelectorAll("span");
const navs = document.querySelectorAll("nav");
const divs = document.querySelectorAll("div");
const section = document.querySelectorAll("section");

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
    li.forEach(p => p.classList.replace("text-light", "text-black"));
    paragraphs.forEach(p => p.classList.replace("text-light", "text-dark"));
    small.forEach(p => p.classList.replace("text-light", "text-dark"));
    // label.forEach(p => p.classList.replace("text-dark", "text-light"));
    header1.forEach(p => p.classList.replace("text-light", "text-dark"));
    spans.forEach(span => span.classList.replace("text-light", "text-dark"));
    navs.forEach(p => p.classList.replace("bg-dark", "bg-light"));
    navs.forEach(p => p.classList.replace("text-light", "text-dark"));
    divs.forEach(p => p.classList.replace("bg-dark", "bg-light"));
    section.forEach(p => p.classList.replace("bg-black", "bg-white"));
    flexSwitchCheckChecked.checked = false; // Sync toggle state
  } else {
    body.classList.replace("bg-light", "bg-dark");
    body.classList.replace("text-dark", "text-light");
    links.forEach(link => link.classList.replace("text-dark", "text-secondary"));
    li.forEach(p => p.classList.replace("text-black", "text-light"));
    paragraphs.forEach(p => p.classList.replace("text-dark", "text-light"));
    small.forEach(p => p.classList.replace("text-dark", "text-light"));
    // label.forEach(p => p.classList.replace("text-dark", "text-light"));
    header1.forEach(p => p.classList.replace("text-dark", "text-light"));
    spans.forEach(span => span.classList.replace("text-dark", "text-light"));
    actives.forEach(p => p.classList.replace("text-dark", "text-light"));
    navs.forEach(p => p.classList.replace("bg-light", "bg-dark"));
    navs.forEach(p => p.classList.replace("text-dark", "text-light"));
    divs.forEach(p => p.classList.replace("bg-light", "bg-dark"));
    section.forEach(p => p.classList.replace("bg-white", "bg-black"));
    flexSwitchCheckChecked.checked = true; // Sync toggle state
  }
}



const submitButton = document.getElementById("submit");
const fullNameInput = document.getElementById("floatingInputName");
const emailInput = document.getElementById("floatingInputEmail");
const messageInput = document.getElementById("textarea");

submitButton.addEventListener("click", () => {
  alert("btn clicked")
  // Get values from the input fields
  const userFullName = fullNameInput.value.trim();
  const userEmail = emailInput.value.trim();
  const userMessage = messageInput.value.trim();

  // Check if all fields are filled
  if (userFullName && userEmail && userMessage) {
    // Construct the WhatsApp message
    const phoneNumber = "08162118292";
    const message = `Hello, My name is ${userFullName}, Email: ${userEmail}. Message: ${userMessage}`;

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  } else {
    // Alert if any fields are missing
    alert("Please fill in all fields.");
  }
});
