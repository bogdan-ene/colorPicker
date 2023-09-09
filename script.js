// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange() {
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  
  // Change the background color of the entire page (both <html> and <body>)
  document.documentElement.style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;

  // Change the button text
  button.innerText = 'Pick Another Color';
}

button.addEventListener('click', colorChange);
