const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["html", "css", "js"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong happened.");
    }
  }, 1000);
});

promise1
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// ['html', 'css', 'js'] (resolved promise)

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["html", "css", "react"];
    if (skills.includes("node")) {
      resolve("full stack developer");
    } else {
      reject("Something wrong happened.");
    }
  }, 1000);
});

promise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Something wrong happened

const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
// (250) [{…}, {…}, ...]

fetch("https://restcountries.com/v3.1/name/serbia")
  .then((res) => res.json())
  .then((data) => {
    const spellingsArray = data[0].altSpellings;
    console.log(spellingsArray);

    fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[2]}`) // HR
      .then((res) => res.json())
      .then((data) => console.log(data[0].altSpellings[1])) // Hrvatska
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const romaniaData = await response.json();
    console.log(romaniaData);
    console.log(romaniaData[0].flags.png); // https://flagcdn.com/w320/ro.png
    const img = document.createElement("img");
    img.src = romaniaData[0].flags.png;
    img.width = 140;
    img.height = 90;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

fetchData("https://restcountries.com/v3.1/name/romania");
