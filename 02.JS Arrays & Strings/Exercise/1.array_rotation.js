function arrayRotation (num, rotations) {
    
    for (let i = 0; i < rotations; i++) {
        
        let firstNum = num.shift()
        num.push(firstNum)
    }
    //console.log(num)
    console.log(num.join(' '))

}

arrayRotation([51, 47, 32, 61, 21], 2)
//arrayRotation([32, 21, 61, 1], 4)
//arrayRotation([2, 4, 15, 31], 5)