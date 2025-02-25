function addSubstract (a, b, c) {
   
    let addNum = add(a, b)
    
    function add(a, b) {
        return a + b
    }
    function substract(addNum, c) {
        return addNum - c
    }
    return substract(addNum, c)
}

console.log(addSubstract(23, 6, 10))
console.log(addSubstract(1, 17, 30))


function smallestNum(a, b, c){

    const sum = (a, b) => a + b
    const substract = (z, c) => a - b
    
    const result = substract(sum(a,b), c)

    console.log(result)

}
smallestNum(23, 6, 10)
