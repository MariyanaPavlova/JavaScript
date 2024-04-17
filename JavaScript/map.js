function arraysAdvanced(){
    
    let arr = [2, 5, 10, 20, 30];
    
    let arr2 = arr.map(n => n+1); //замества for цикъл и прилага нещо върху всички ел.
    let arrN = arr.map(n => Number(n)); //прави вс. число ако е подаден стринг

    console.log(arr2)
}
arraysAdvanced();
