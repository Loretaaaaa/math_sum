// two random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

// Display the random numbers on the web page
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

// Add the two numbers when the user clicks on the "Add" button
document.getElementById("checkButton").addEventListener("click", function() {
  // Get the user's answer
    let answer = document.getElementById("answer").value;

    
    answer = parseInt(answer);

    // Check if the answer is correct
    if (answer === num1 + num2) {
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Sorry. Incorrect. The correct answer is " + (num1 + num2) + ".";
    }
});
