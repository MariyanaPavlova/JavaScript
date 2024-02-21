function solve(n1, n2, n3) {
    let result;

    if (n1 > n2 && n1 > n3)
        result = n1;

    else if (n2 > n1 && n2 > n3)
        result = n2;

    else if (n3 > n1 && n3 > n2)
        result = n3;


   console.log(`The largest number is ${result}.`);

}

function solve2(n1, n2, n3) {
    let nArr = [n1, n2, n3]
    let sortednArr = nArr.sort((a,b)=>a-b);
    let largest = sortednArr[2];
    
    let largest2 = (Math.max(n1, n2, n3));
    
    console.log(largest);
    console.log(largest2);
    
}

solve2(5, -3, 16)
solve2(-3, -5, -22.5)