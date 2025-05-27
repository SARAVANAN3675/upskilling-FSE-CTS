// Simulate a layout bug by adding styles dynamically
window.addEventListener('load', () => {
  const container = document.getElementById('mainContainer');
  
  // Intentional bug: misspelled property (should be backgroundColor)
  container.style.backgroundcolor = "lightblue";

  console.log("Container loaded:", container);

  buggyFunction(); // Intentional error to debug
});

function buggyFunction() {
  let a = 10;
  let b = 0;
  let result = a / b; // Division by zero (not an error in JS, but suspicious logic)
  console.log("Result is", result);

  // Intentional error
  let x = document.getElementById("nonExistingElement").innerText;
  console.log("X:", x);
}