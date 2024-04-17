function arrayDemo(){

    let num = [1,2,3]; //метода split връща масив

    let numCopy = num.slice() //копие на num; може да се ограничи (от, до)
    let numCopy2 = num.slice(0,1)

    console.log(numCopy2)
    console.log(num[num.length-1]) //взимаме посл.ел

    let first = num.shift() //премахва първия
    num.unshift(0) //добавя в началото

    let last = num.pop() //премахва последния
    num.push(99)  //добавя накрая

    console.log(num) 

    console.log(num.includes(1)) //съдържа се
    console.log(num.indexOf(1)) //ако индекса не съществува връща -1 

    console.log(num.join(',,')) //масива го прави на стринг

}
arrayDemo()

function arraysAdvanced(){
    let arr = ['a', 'b', 'c', 'd']

    let newIndex = arr.indexOf('c')
    
    //от newIndex изтрии 0 ел. и добави 'added word'
    arr.splice(newIndex, 0, 'added word')
    console.log(arr)

    //от ind 0 изтрии 2бр. ел.
    arr.splice(0, 2)
    console.log(arr)
}
arraysAdvanced()

