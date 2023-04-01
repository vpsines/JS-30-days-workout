// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((total, n) => total + n, 0);
  }

  min() {
    let minValue = ages[0];
    this.ages.forEach((e) => {
      if (minValue > e) {
        minValue = e;
      }
    });
    return minValue;
  }

  max() {
    let maxValue = ages[0];
    ages.forEach((e) => {
      if (maxValue < e) {
        maxValue = e;
      }
    });
    return maxValue;
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    let m = 0;
    this.ages.sort();
    if (this.count() % 2 == 0) {
      m = (this.ages[(this.count() - 1) / 2] + this.ages[this.count() / 2]) / 2;
    } else {
      m = this.ages[(this.count() - 1) / 2];
    }
    return m;
  }

  mode(isOcucrences) {
    let occurences = [];
    this.ages.forEach((e) => {
      let index = occurences.findIndex((o) => o.value == e);
      if (index == -1) {
        occurences.push({ value: e, occurence: 1 });
      } else {
        occurences[index].occurence += 1;
      }
    });
    if (isOcucrences) {
      return occurences;
    }

    let max = occurences[0];
    occurences.forEach((e) => {
      if (e.occurence > max.occurence) {
        max = e;
      }
    });

    return `(${max.value},${max.occurence})`;
  }

  var() {
    return this.std() ** 2;
  }

  std() {
    let val = this.ages.map((e) => (e - this.mean()) ** 2);
    return Math.sqrt(
      val.reduce((total, i) => total + i, 0) / (this.count() - 1)
    );
  }

  freqDist() {
    let occurences = this.mode(true);
    let freqDistribution = [];
    occurences.forEach((e) =>
      freqDistribution.push(`(${e.value},${e.occurence})`)
    );
    return freqDistribution;
  }
}

const statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode());
console.log("Variance: ", statistics.var());
console.log("Standard Deviation: ", statistics.std());
console.log("Variance: ", statistics.var());
console.log("Frequency Distribution: ", statistics.freqDist());

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = [];
    this.expenses = [];
  }

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }
  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
  accountInfo() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income : ${this.totalIncome()}`);
    console.log(`Total Expense : ${this.totalExpense()}`);
    console.log(`Account balance : ${this.accountBalance()}`);
  }
  addIncome(income) {
    this.incomes.push(income);
  }
  addExpense(expense) {
    this.expenses.push(expense);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
  
}

const account = new PersonAccount('Vyshnav','Sasidharan')
console.log(account)

account.addIncome({amount: 10000,description:'salary'})
account.addIncome({amount:5000,description:'Bonus'})
account.addExpense({amount:3000,description:'room-rent'})
account.addExpense({amount:2000,description:'taxi'})

console.log(account)
account.accountInfo()