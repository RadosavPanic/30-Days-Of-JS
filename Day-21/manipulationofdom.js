// Getting elements

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles); // HTMLCollection(4)

for (const title of allTitles) {
  console.log(title);
}
/* 
h1#first-title.title
h1#second-title.title
h1#third-title.title
h1
*/

const allTitles2 = document.getElementsByClassName("title");
console.log(allTitles2); // HTMLCollection(3)

const firstTitle = document.getElementById("first-title");
console.log(firstTitle); // h1#first-title.title

const queryFirstTitle = document.querySelector("h1"); // gets the first h1 it finds
const queryFirstTitle2 = document.querySelector("#first-title");
const queryFirstTitle3 = document.querySelector(".title"); // gets the first element with class title

console.log(queryFirstTitle, queryFirstTitle2, queryFirstTitle3); // h1#first-title.title

const allTitles3 = document.querySelectorAll("h1");
console.log(allTitles3); // NodeList(4) [h1#first-title.title, h1#second-title.title, h1#third-title.title, h1]

allTitles3.forEach((title) => console.log(title));
// <h1 class="title" id="first-title">First title</h1>
allTitles3[3].classList.add("title");
allTitles3[3].id = "fourth-title";
// h1#fourth-title.title

allTitles3[3].setAttribute("class", "titles");
allTitles3[3].setAttribute("id", "last-title");

console.log(allTitles3[3]); // <h1 class="titles" id="last-title"></h1>

allTitles3[3].classList.remove("titles");

allTitles3[3].className = "title";
allTitles3[3].id = "fourth-title";

allTitles3[3].classList.add("title", "header-title");
// <h1 class="title header-title" id="fourth-title"></h1>

allTitles3[3].textContent = "Fourth title";

const listOfChallenges = `
<li>React challenge</li>
<li>JS challenge</li>
<li>CSS challenge</li>
<li>Node challenge</li>
`;
const ul = document.querySelector("ul");
ul.innerHTML = listOfChallenges; // appended elements using innerHTML

// removing elements using innerHTML
ul.innerHTML = "";

const titles = document.querySelectorAll(".title");

titles.forEach((title, i) => {
  title.style.fontSize = "24px";
  i % 2 === 0 ? (title.style.color = "green") : (title.style.color = "red");
  i % 2 === 0
    ? (title.style.backgroundColor = "aqua")
    : (title.style.backgroundColor = "lightgray");
});
