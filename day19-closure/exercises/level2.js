//Create a closure which has three inner functions

function calculator(a,b){
    let result =0

    function sum(a,b){
        result = a+b
        return result
    }

    function difference(a,b){
        result = a-b
        return result
    }

    function product(a,b){
        result = a*b
        return result
    }

    return {
        sum : sum(a,b),
        difference: difference(a,b),
        product: product(a,b)
    }
}

const calculator1 = calculator(5,6)

console.log(calculator1.product)