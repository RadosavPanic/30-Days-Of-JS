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
