const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (e) => {
  console.log(`event:`, e);
  console.log(`event.target:`, e.target);
  console.log(`event.target.textContent:`, e.target.textContent);
});

const btn2 = document.querySelector("#btn2");

const btnAlert = () => {
  alert("Button clicked");
};

const btnClearConsole = () => {
  console.clear();
};

const btn3 = document.getElementById("btn3");
btn3.addEventListener("dblclick", (e) => {
  console.log("Double clicked a button", e.target);
});

btn3.addEventListener("mouseenter", (e) => {
  alert("mouse entered on the button");
});

const mass = document.querySelector("#mass");
const height = document.querySelector("#height");

const btnBMI = document.querySelector("#btnBMI");
btnBMI.addEventListener("click", () => {
  const bmi = mass.value / height.value ** 2;
  alert("your bmi is " + bmi.toFixed(2));
  console.log(bmi);
});

const input = document.querySelector("#input");
const p = document.querySelector("#inputParagraph");

input.addEventListener("input", (e) => {
  p.textContent = e.target.value;
});

input.addEventListener("blur", (e) => {
  p.textContent = "Field above is required";
  p.style.color = "red";
});

document.body.addEventListener("keypress", (e) => {
  if ((e.key = "w"))
    alert(`Key is: ${e.key} and its key code is: ${e.keyCode}`); // Key is: w and its key code is: 119
});
