function perfectNum(n) {

    let number = 0
    for (i=1; i <= n; i++){
        if(n % i == 0){
            number += i
        }
    }
    // if (number /2 == n){
    //     console.log('We have a perfect number!')
    // } else{
    //     console.log("It's not so perfect.")

    return (number/2 === n)?    //тернарен оператор
        'We have a perfect number!' : "It's not so perfect."

}
console.log(perfectNum(6))
console.log(perfectNum(28))
console.log(perfectNum(1236498))