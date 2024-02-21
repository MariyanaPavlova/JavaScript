function order(products, quantity) {

    switch(products) {
        case "coffee":
            return (quantity * 1.50).toFixed(2); break
        case "water":
            return (quantity * 1.00).toFixed(2); break
        case "coke":
            return (quantity * 1.40).toFixed(2); break
        case "snacks":
            return (quantity * 2.00).toFixed(2); break

    }
}

function order(order, quantity) {
    const drinkPrices = {
        coffee: 1.50,
        water: 1,
        coke: 1.4,
        snack: 2,
    }

    const price = drinkPrices[order];
    let totalPrice = price * quantity
    console.log(totalPrice)
}

console.log(order("water", 5))
console.log(order("coffee", 2))