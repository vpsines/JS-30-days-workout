// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName:'Vyshnav',
    lastName: 'Sasidharan',
    incomes:[
        {
            amount:10000,
            descritpion:'salary'
        },
        {
            amount:1000,
            descritpion:'stocks'
        },
        {
            amount:5000,
            descritpion:'bonus'
        },
    ],
    expesnses:[
        {
            amount:3000,
            descritpion:'travel'
        },
        {
            amount:1000,
            descritpion:'food'
        },
        {
            amount:5000,
            descritpion:'rent'
        },
    ],
    totalIncome:function (){
        let sum = 0
        for(let i of this.incomes){
            sum += i.amount
        }
        return sum
    },
    totalExpense:function (){
        let sum = 0
        for(let i of this.expesnses){
            sum += i.amount
        }
        return sum
    },
    accountInfo:function (){
        console.log('Account details')
        console.log(`Name:${this.firstName + ' '+ this.lastName}`)
        console.log(`Expenses:${this.totalExpense()}`)
        console.log(`Income: ${this.totalIncome}`)
    },
    addIncome: function (amount,description){
        this.incomes.push({amount:amount,description})
    },
    addExpense: function (amount,description){
        this.expesnses.push({amount:amount,descritpion:description})
    },
    accountBalance: function (){
        return this.totalIncome() - this.totalExpense()
    }
}

console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
personAccount.addExpense(5000,'extra')
personAccount.addIncome(2000,'utils')
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database. 
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(newUser){
    for(let user of users){
        if(user.username == newUser.username){
            console.log("Account already exists.")
            return
        }
    }
    users.push(newUser)
    console.log('Signup successfull.')
}

const newUser = {
    _id: '234sds',
    username: 'Lalu',
    email: 'lalu@google.com',
    password: '2211',
    createdAt:'01/11/2023 9:30 AM',
    isLoggedIn: false
}

signUp(newUser)
signUp(newUser)


// b. Create a function called signIn which allows user to sign in to the application
function sigIn(userId){
    for(let user of users){
        if(user._id == userId){
            user.isLoggedIn = true
        }
    }
}

sigIn('234sds')
for(let user of users){
    if(user.isLoggedIn){
        console.log(user)
    }
}

// The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
function rateProduct(productId,userId,rating){
    for(let product of products){
        if(product._id == productId){
            product.ratings.push({userId:userId,rate:rating})
        }
    }
    
}

rateProduct('hedfcg','234sds',4)

for(let product of products){
    if(product._id == 'hedfcg'){
        console.log(product.ratings)
    }
}

//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId){
    let sum =0
    let noOfRatings = 0
    for(let product of products){
        if(product._id == productId){
            noOfRatings = product.ratings.length
            for(let r of product.ratings){
                sum += r.rate
            }
        }
    }
    console.log(`Average rating: ${sum/noOfRatings}`)
}
averageRating('hedfcg')

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId,userId){
    for(let product of products){
        if(product._id == productId){
            if(product.likes.includes(userId)){
                let index = product.likes.indexOf(userId)
                product.likes = product.likes.splice(index,1)
            }else{
                product.likes.push(userId)
            }
        }
    }
}

likeProduct('hedfcg','234sds')
console.log(products[2].likes)
likeProduct('hedfcg','234sds')
console.log(products[2].likes)
