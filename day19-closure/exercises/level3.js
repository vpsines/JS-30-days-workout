// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(){
    let firstName = 'Vyshnav'
    let lastName = 'Sasidharan'
    let incomes = [{amount:10000,description:'salary'}]
    let expenses = [{amount:3000,description:'rent'}]

    function totalIncome(){
        let total= incomes.reduce((total,income)=> total+income.amount,0)
        return total
    }

    function totalExpense(){
        let total = expenses.reduce((total,expense)=>total+expense.amount,0)
        return total
    }

    function addIncome(income){
        incomes.push(income)
    }

    function addExpense(expense){
        expenses.push(expense)
    }

    function accountBalance(){
        const bal = totalIncome() - totalExpense()
        return bal
    }

    function accountInfo(){
        return `Name: ${firstName} ${lastName} \nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nAccount balance: ${totalIncome()- totalExpense()}`
    }

    addExpense({amount:2000,description:'taxi'})
    addIncome({amount:4000,description:'bonus'})

    return {
        info : accountInfo(),
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        bal: accountBalance()
    }
}

const account = personAccount()

console.log(account.info)
console.log(account.totalIncome)
console.log(account.totalExpense)
console.log(account.bal)
console.log(account.info)

