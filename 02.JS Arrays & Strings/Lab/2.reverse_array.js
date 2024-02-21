function solve(n, input) {
    
    let arr=[];
    for (let i=0; i<n; i++){
        arr.push(input[i]);
    }

    arrReverse = arr.reverse()
    /*let arr_reverse = []
    for (let i=arr.length-1; i>=0; i--){
        arr_reverse.push(arr[i])
    }
    */
    console.log(arrReverse.join(' '));
    
    const result = input.slice(0 , n).reverse();
    console.log(result.join(" "));

}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
