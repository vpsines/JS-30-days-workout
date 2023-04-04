// Create a closure which has one inner function

function printNSum(n){
    let sum =0
    function calculateSum(a){
        sum += a
    }

    for(let i=1; i<=n;i++){
        calculateSum(i)
    }
    return sum
}

console.log(printNSum(10))

