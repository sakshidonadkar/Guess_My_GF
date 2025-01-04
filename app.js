// Array to store names
const array = [];

// Input field
let input_name = document.getElementById("name_entered");

// Adding name when "Add Name" button is pressed
let addName = document.getElementById("addName");
addName.addEventListener("click", placeName);

// Place Name
const myName = document.getElementById("name");

function placeName() {
  if (input_name.value.trim() !== "") {
    let newP = document.createElement("p");
    newP.className = "name";
    newP.innerHTML = input_name.value;
    array.push(input_name.value);
    input_name.value = "";
    myName.appendChild(newP);
  } else {
    alert("Please enter a valid name.");
  }
}

// Generate random index
function randomIndex(number) {
  return Math.floor(Math.random() * number);
}

// Display result
let place_result = document.getElementById("result");
let outputBtn = document.getElementById("generate_output");

outputBtn.addEventListener("click", function () {
  const resultContainer = document.getElementById("input__result");
  
  if (array.length === 0) {
    place_result.innerHTML = "Enter names first.";
  } else {
    const result = array[randomIndex(array.length)];
    place_result.innerHTML = ""; // Clear previous content

    // Create and display the additional line
    let futureGF = document.createElement("p");
    futureGF.className = "future-gf-line";
    futureGF.innerHTML = `Your future GF will be ${result}`;
    resultContainer.appendChild(futureGF);
  }
});

