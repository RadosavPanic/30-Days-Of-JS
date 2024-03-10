localStorage.setItem("firstName", "John");

console.log(localStorage.getItem("firstName")); // John

localStorage.setItem("age", 45);
console.log(localStorage.getItem("age")); // 45

const skills = ["html", "css", "js", "react"];
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);

console.log(localStorage.getItem("skills"));
/* 
[
    "html",
    "css",
    "js",
    "react"
]
*/

const skillsParsed = JSON.parse(localStorage.getItem("skills"));
console.log(skillsParsed); // ['html', 'css', 'js', 'react']

const user = {
  firstName: "John",
  lastName: "Doe",
  skills: ["html", "css", "jquery", "js", "angular"],
};

const userJSON = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userJSON);

console.log(localStorage.getItem("user"));

/* 
{
    "firstName": "John",
    "lastName": "Doe",
    "skills": [
        "html",
        "css",
        "jquery",
        "js",
        "angular"
    ]
} 
*/

const userParsed = JSON.parse(localStorage.getItem("user"));
console.log(userParsed); // {firstName: 'John', lastName: 'Doe', skills: Array(5)}

let keys = [];
for (let i = 0; i < localStorage.length; i++) {
  console.log(`Key ${i}: ${localStorage.key(i)}`);
  keys.push(localStorage.key(i));
}
/* 
Key 0: age
Key 1: __user_original_source
Key 2: skills
Key 3: __anon_id
Key 4: user
Key 5: ckid
Key 6: _grecaptcha
Key 7: firstName
Key 8: __user_original_landing_page
*/

const keysJSON = JSON.stringify(keys, undefined, 2);
console.log(keysJSON);
/* 
[
  "age",
  "__user_original_source",
  "skills",
  "__anon_id",
  "user",
  "ckid",
  "_grecaptcha",
  "firstName",
  "__user_original_landing_page"
]
*/
