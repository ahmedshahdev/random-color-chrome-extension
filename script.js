let color = document.getElementById("color");
let new_btn = document.querySelector('.new-btn');

function generateUniqueHexColor() {
    // Generate a random hex color code
    const hexColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${hexColor}`;
  }
  chrome.action.setIcon({
    path: 'icon.png'
  });  
  function updateColor() {
    color.innerHTML = generateUniqueHexColor();
    color.style.backgroundColor = color.innerHTML;
  }

new_btn.onclick = updateColor;
window.onload = updateColor;