const title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.textContent = "30 days of JS";

console.log(title);

document.body.append(title);

let moreTitles;
for (let i = 0; i < 3; i++) {
  moreTitles = document.createElement("h1");
  moreTitles.className = "title";
  moreTitles.style.fontSize = "24px";
  moreTitles.textContent = `Title ${i}`;
  document.body.append(moreTitles);
  console.log(moreTitles.textContent); // Title 0, Title 1, Title 2
}

const allTitles = document.querySelectorAll("h1");
allTitles.forEach((title) => {
  title.remove();
});

document.body.append(document.createElement("ul"));
const list = document.querySelector("ul");
list.style.border = "2px solid aqua";

let li;
for (let i = 0; i < 4; i++) {
  li = document.createElement("li");
  li.classList.add("list-item");
  li.textContent = `Item ${i + 1}`;
  list.append(li);
}

list.innerHTML = "";
document.body.removeChild(list);
