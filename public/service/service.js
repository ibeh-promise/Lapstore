document.addEventListener('DOMContentLoaded', () => {
    // Select all the view buttons
    const viewButtons = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary");
    const overlay = document.getElementById("image-overlay");
    const overlayImage = document.getElementById("overlay-image");
    const closeOverlayButton = document.getElementById("close-overlay");
  
    // Loop through each button and add a click event listener
    viewButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Get the image source from the clicked button's parent element
        const cardBody = button.closest(".card");
        const img = cardBody.querySelector("img");
  
        // Check if the image was found before accessing its source
        if (img) {
          // Set the image source in the overlay
          overlayImage.src = img.src;
  
          // Show the overlay
          overlay.style.display = "flex";
          overlay.style.visibility = "visible";
        } else {
          console.error("Image not found in the card body.");
        }
      });
    });
  
    // Close the overlay when the close button is clicked
    closeOverlayButton.addEventListener("click", () => {
      overlay.style.visibility = "hidden";
    });
  });
  