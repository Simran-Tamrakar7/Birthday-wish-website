// script.js

// Secret code for index.html
function checkCode() {
  const input = document.getElementById('codeInput').value;
  const error = document.getElementById('error');
  if(input.toLowerCase() === "birthday") {
    window.location.href = "welcome.html";
  } else {
    error.textContent = "Oops! Try again.";
  }
}

// Balloon pop for fun.html
function popBalloon(id) {
  const balloon = document.getElementById(id);
  balloon.style.display = "none";
  alert("🎉 You popped a balloon! 🎉");
}
