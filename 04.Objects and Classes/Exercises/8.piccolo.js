function CarNum(input){


    let parking= []

    for (let car of input){
        let [dir, num] = car.split(", ")

        if (dir === "IN" && !parking.includes(num)){
            parking.push(num)
        }else 
            if(dir === 'OUT' && parking.includes(num)){
            let index = parking.indexOf(num)    
            parking.splice(index, 1)
            }
    }
    if(parking.length > 0){
        let sortedNum = parking.sort((a,b) =>
            a.localeCompare(b));

        console.log(sortedNum.join('\n'))
    }else {
        console.log("Parking Lot is Empty");
    }

}

CarNum(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

CarNum(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])