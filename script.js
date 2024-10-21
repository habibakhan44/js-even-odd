function checkEvenOdd() {
    var number = Number(document.getElementById('numberInput').value);
    var result = document.getElementById('result');
  
    if (isNaN(number)) {
      result.textContent = "Please enter a valid number.";
      result.style.color = "red";
    } else if (number % 2 === 0) {
      result.textContent = number + " is an even number.";
      result.style.color = "green";
    } else {
      result.textContent = number + " is an odd number.";
      result.style.color = "blue";
    }
  }
  