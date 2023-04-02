// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName : 'Mary',
    lastName:'Jane',
    incomes:[],
    expenses:[],
    totalIncome:function (){
        return this.incomes.reduce((total,cur)=> total + cur.amount,0)
    },
    totalExpenses:function (){
        return this.expenses.reduce((total,cur)=>total+cur.amount,0)
    },
    addExpense:function (expense){
        this.expenses.push(expense)
    },
    addIncome:function (income){
        this.incomes.push(income)
    },
    accountBalance:function (){
        return this.totalIncome() - this.totalExpenses()
    },
    accountInfo:function (){
        console.log(`Name:${this.firstName} ${this.lastName}`)
        console.log(`Balance: ${this.accountBalance()}`)
        console.log(`Total income: ${this.totalIncome()}`)
        console.log(`Total expenses: ${this.totalExpenses()}`)
    }
}

localStorage.clear()
console.log(localStorage)
personAccount.addIncome({amount:4000,description:"bonus"})
personAccount.accountInfo()
localStorage.setItem("personalAccount",JSON.stringify(personAccount,undefined,4))
console.log(localStorage)
