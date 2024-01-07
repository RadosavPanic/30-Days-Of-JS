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
