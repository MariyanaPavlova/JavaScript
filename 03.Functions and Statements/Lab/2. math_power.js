function mathPow(a, b) {

    let res = 1
    for (i =0; i < b; i++) {
        res = res * a
    }
    console.log(res)

    console.log(Math.pow(a,b))
}

mathPow(2,8)
mathPow(3,4)