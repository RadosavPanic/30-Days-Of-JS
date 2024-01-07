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
