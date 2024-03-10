const usersText = `
{
    "users": [
        {
            "firstName":"John",
            "lastName":"Doe",
            "email": "johndoe@gmail.com",
            "age": 32
        },
        {
            "firstName":"Alex",
            "lastName":"Jameson",
            "email": "alexjameson@gmail.com",
            "age": 35
        }
    ]
}
`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);
/* 
{users: Array(2)}
[{…}, {…}]
{firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 32}
{firstName: 'Alex', lastName: 'Jameson', email: 'alexjameson@gmail.com', age: 35}
*/

const usersObj2 = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});

console.log(usersObj2);
/* 
{users: Array(2)}
[{…}, {…}]
{firstName: 'JOHN', lastName: 'DOE', email: 'johndoe@gmail.com', age: 32}
{firstName: 'ALEX', lastName: 'JAMESON', email: 'alexjameson@gmail.com', age: 32}
*/

const convertedObjToJSON1 = JSON.stringify(usersObj, undefined, 4);
console.log(convertedObjToJSON1);
/* 
{
    "users": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@gmail.com",
            "age": 32
        },
        {
            "firstName": "Alex",
            "lastName": "Jameson",
            "email": "alexjameson@gmail.com",
            "age": 35
        }
    ]
}
*/

const convertedObjToJSON2 = JSON.stringify(
  usersObj,
  (key, value) => (key !== "age" ? value : undefined),
  4
);
console.log(convertedObjToJSON2);
/* 
{
    "users": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@gmail.com"
        },
        {
            "firstName": "Alex",
            "lastName": "Jameson",
            "email": "alexjameson@gmail.com"
        }
    ]
}
*/

const singleUser = {
  firstName: "Johny",
  lastName: "Jester",
  email: "johnyjester@gmail.com",
  age: 41,
};

const singleUserToJSON = JSON.stringify(
  singleUser,
  ["firstName", "lastName", "age"],
  4
);

console.log(singleUserToJSON);
/* 
{
    "firstName": "Johny",
    "lastName": "Jester",
    "age": 41
}
*/
