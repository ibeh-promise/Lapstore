const phoneIcon = document.getElementById("phoneIcon");

phoneIcon.addEventListener("click", () => {
  // Use the Clipboard API to write text to the clipboard
  navigator.clipboard.writeText("08162118292").then(() => {
    console.log("Phone number copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
});

const whatsappIcon = document.getElementById("whatsappIcon");

whatsappIcon.addEventListener("click", () => {
  const phoneNumber = "08162118292";
  const message = "Hello, I'm interested in your services!";
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappURL, "_blank");
});
