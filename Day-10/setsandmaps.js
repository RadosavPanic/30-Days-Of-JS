// Set is a collection of elements and only contains unique elements

const set1 = new Set();
console.log(set1); // Set(0)
console.log(set1.size); // 0

const languages1 = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "French",
];

const setOfLanguages1 = new Set(languages1);
console.log(setOfLanguages1); // Set(4) {'English', 'Finnish', 'French', 'Spanish'}

for (const lang of setOfLanguages1) {
  console.log(lang); // English Finnish French Spanish
}

const setOfCompanies = new Set();
setOfCompanies.add("Google").add("Facebook");
console.log(setOfCompanies); // Set(2) {'Google', 'Facebook'}

const companiesArr = ["Amazon", "Oracle", "Microsoft"];
for (const company of companiesArr) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies); // Set(5) {'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

setOfCompanies.delete("Google");
console.log(setOfCompanies); // Set(4) {'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

setOfCompanies.clear();
console.log(setOfCompanies.size); // 0
