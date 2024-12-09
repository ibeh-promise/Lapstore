const flexSwitchCheckChecked = document.getElementById("flexSwitchCheckChecked");
const body = document.querySelector("body")
let mainNav = document.getElementById("main-nav")
flexSwitchCheckChecked.addEventListener("change", render)
let toggleSwitchOn = true

function render() {
  if (location.reload) {
    console.log("hey");
      if (toggleSwitchOn == true) {
        toggleSwitchOn = false
        console.log(toggleSwitchOn);
      }else{
        toggleSwitchOn = true
      }
  }
  if (flexSwitchCheckChecked.click && toggleSwitchOn == false) {
    console.log("off");
    document.body.classList.remove("bg-dark")
    document.body.classList.add("text-dark")
    mainNav.body.classList.remove("bg-dark")
  }else if (flexSwitchCheckChecked.click && toggleSwitchOn == true) {
    console.log("off");
    document.body.classList.add("bg-dark")
    document.body.classList.remove("text-dark")
  }
}