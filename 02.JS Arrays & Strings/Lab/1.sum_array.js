function solve(input) {
    
    //let first = input[0];
    //let last = input[input.length-1];
    let first = input.shift()
    let last = input.pop()
    
    console.log(first+last);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);