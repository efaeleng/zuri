const myName = "Efa";
const height = 1.8;
const country = "Nigeria";

let details = document.querySelector("#print");

// console.log(`My name is ${myName}, I'm ${height} m tall and I'm from ${country}`);
let result = `My name is ${myName}, I'm ${height} m tall and I'm from ${country}`;

function printResult() {
  details.innerHTML = result;
}
printResult()