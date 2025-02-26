function convert(firstName, lastName, hairColor) {
    let res = { 
        name: firstName,
        lastName,
        hairColor }
    
    let convStr = JSON.stringify(res) //conv Obj to JSON str
    console.log(convStr)

}

convert('George', 'Jones', 'Brown')
