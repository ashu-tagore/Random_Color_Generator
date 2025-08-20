// To generate a random color when the page loads
window.addEventListener("load", generateRandomColor);

// To generate a random color when there is a click on the body
document.body.addEventListener("click", generateRandomColor);

// Code for copying color values
document.querySelector("#hex").addEventListener("click", function (e) {
  e.stopPropagation();
  navigator.clipboard.writeText(this.innerText);
  alert("Hex color copied to clipboard!");
});

document.querySelector("#rgb").addEventListener("click", function (e) {
  e.stopPropagation();
  navigator.clipboard.writeText(this.innerText);
  alert("RGB color copied to clipboard!");
});

// Function to generate random color's rgb values
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Assigning the generated rgb color value to the body background
  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.documentElement.style.setProperty("--bgcolor", rgb);

  //Updating the value of rgb in the body background
  document.querySelector("#rgb").innerText = rgb;

  //Function to convert rgb values to hex values
  function toHex(color) {
    return color.toString(16).padStart(2, "0").toUpperCase();
  }

  //Updating the value of hex in the body background
  let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  document.querySelector("#hex").innerText = hex;
}
