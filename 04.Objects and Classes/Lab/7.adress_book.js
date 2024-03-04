function addressBook(input) {

    let dict = {}
    for (let i of input){
        let tokens = i.split(":")
        let name = tokens[0]
        let address = tokens[1]
        dict[name] = address
    }
    let peopleName = Object.entries(dict) 
    /*[
        [ 'Tim', 'Doe Crossing' ]
        [ 'Bill', 'Ornery Rd' ],
        [ 'Peter', 'Carlyle Ave' ],
      ]*/

    let sortedNames = peopleName.sort((a, b) => a[0].localeCompare(b[0]))

    for(let [name, address] of sortedNames){
        console.log(`${name} -> ${address}`)
    }

}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])