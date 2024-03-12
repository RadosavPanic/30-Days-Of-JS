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
