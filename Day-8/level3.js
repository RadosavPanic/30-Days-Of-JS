const personAccount = {
  firstName: "Radosav",
  lastName: "Panic",
  incomes: [
    { value: 300, description: "Freelance work" },
    { value: 1300, description: "Salary" },
    { value: 200, description: "Bonus" },
    { value: 900, description: "Investment" },
  ],
  expenses: [
    { value: -400, description: "Rent" },
    { value: -100, description: "Utilities" },
    { value: -1100, description: "Shopping" },
  ],
  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.value, 0);
  },
  totalExpense() {
    return Math.abs(
      this.expenses.reduce((acc, expense) => acc + expense.value, 0)
    );
  },
  addIncome(incomeValue, incomeDescription = "") {
    this.incomes.push({ value: incomeValue, description: incomeDescription });
  },
  addExpense(expenseValue, expenseDescription) {
    this.expenses.push({
      value: expenseValue,
      description: expenseDescription,
    });
  },
  accountBalance() {
    const totalIncome = this.totalIncome();
    const totalExpense = this.totalExpense();

    const balance = totalIncome - totalExpense;

    return balance;
  },
  accountInfo() {
    return `First name: ${this.firstName}\nLast name: ${
      this.lastName
    }\nBalance: ${this.accountBalance()}`;
  },
};

let totalIncome = personAccount.totalIncome();
console.log(totalIncome); // 2700

let totalExpense = personAccount.totalExpense();
console.log(totalExpense); // 1600

personAccount.addIncome(1000, "Payment by citizen order");
personAccount.addIncome(600); // No description added, so default value will be empty string
personAccount.addExpense(-300, "Shopping");

totalIncome = personAccount.totalIncome();
console.log(totalIncome); // 4300

totalExpense = personAccount.totalExpense();
console.log(totalExpense); // 1900

console.log(personAccount.accountInfo());
/* 
First name: Radosav
Last name: Panic
Balance: 2400 
*/

// SignUp and SignIn challenge (Users)
const usersL3 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "01/04/2024 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "01/04/2024 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "01/04/2024 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "01/04/2024 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "01/04/2024 10:00 AM",
    isLoggedIn: false,
  },
];

function currentFormattedDate() {
  const now = new Date();

  function calcLeadingZero(num) {
    return String(num).padStart(2, "0");
  }

  const month = calcLeadingZero(now.getMonth() + 1);
  const day = calcLeadingZero(now.getDate());
  const hour = calcLeadingZero(now.getHours());
  const mins = calcLeadingZero(now.getMinutes());

  let timeOfDay = "";
  if (now.getHours() >= 0 && now.getHours() < 12) {
    timeOfDay = "AM";
  } else {
    timeOfDay = "PM";
  }

  const formattedDate = `${month}/${day}/${now.getFullYear()} ${hour}:${mins} ${timeOfDay}`;

  return formattedDate;
}

const generateRandomId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

function signUp(accUsername, accPassword, accEmail) {
  let accountExists = false;
  for (const [key, value] of Object.entries(usersL3)) {
    if (value.username === accUsername) {
      console.log(`Account ${accUsername} already exists.`);
      accountExists = true;
      break;
    }
  }

  if (!accountExists) {
    usersL3.push({
      _id: generateRandomId(),
      username: accUsername,
      email: accEmail,
      password: accPassword,
      createdAt: currentFormattedDate(),
      isLoggedIn: true,
    });

    console.log(`Successfully created account. Welcome ${accUsername}!`);
  }
}

signUp("Radosav", "123444", "radosav@radosav.com"); // Successfully created account. Welcome Radosav!

function signIn(accUsername, accPassword) {
  for (const [key, value] of Object.entries(usersL3)) {
    if (value.username === accUsername) {
      if (value.password === accPassword) {
        value.isLoggedIn = true;
        console.log(`Successfully logged in. Welcome ${accUsername}!`);
      } else {
        console.log(`Incorrect password. Try again.`);
        break;
      }
    }
  }
}

signIn("Brook", "123111"); // Successfully logged in. Welcome Brook!

// Products challenge
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function rateProduct(accUsername, productName, ratingNumber) {
  let userId;
  for (const [key, value] of Object.entries(usersL3)) {
    if (value.username === accUsername) {
      if (value.isLoggedIn) {
        userId = value._id;
        break;
      } else {
        console.log(`First log in to be able to rate a product.`);
      }
    }
  }

  for (const [key, value] of Object.entries(products)) {
    if (value.name === productName) {
      value.ratings.push({ userId, rate: ratingNumber });
      console.log(
        `Rated ${productName} successfully. Thank you ${accUsername}!`
      );
      break;
    }
  }
}

signIn("Martha", "123222"); // Successfully logged in. Welcome Martha! (First logging in to be able to rate)

rateProduct("Martha", "TV", 5.5); // Rated TV successfully. Thank you Martha!

function averageRating(productName) {
  for (const [key, value] of Object.entries(products)) {
    if (value.name === productName) {
      if (value.ratings.length === 0) {
        console.log(`Product ${productName} has no ratings.`);
        break;
      }
      if (value.ratings.length > 0) {
        const avgRating = value.ratings.reduce(
          (acc, val, _, arr) => acc + val.rate / arr.length,
          0
        );
        console.log(`Average rating of ${productName}: ${avgRating}`);
      }
    }
  }
}

averageRating("TV"); // Average rating of TV: 5.25 (if rounded, will be 5)

// Likes/unlikes product function
function likeProduct(accUsername, productName) {
  let userId;
  for (const [key, value] of Object.entries(usersL3)) {
    if (value.username === accUsername) {
      if (value.isLoggedIn) {
        userId = value._id;
        console.log(userId);
        break;
      } else {
        console.log(`First log in to be able to like a product.`);
      }
    }
  }

  for (const [key, value] of Object.entries(products)) {
    if (value.name === productName) {
      const userIndex = value.likes.indexOf(userId);

      if (userIndex !== -1) {
        value.likes.splice(userIndex, 1);
        console.log(`Unliked a product. (${accUsername})`);
      } else {
        value.likes.push(userId);
        console.log(`Liked a product. (${accUsername})`);
      }

      break;
    }
  }
}

likeProduct("Brook", "mobile phone"); // Liked a product. (Brook)
likeProduct("Brook", "mobile phone"); // Unliked a product. (Brook)

likeProduct("Martha", "mobile phone"); // Liked a product. (Marta)
