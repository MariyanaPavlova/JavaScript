function phoneBook(input) {
    
    let dict = []
    for (let i of input){
        let [name,phone] = i.split(' ');
        dict[name] = phone;
    }

    for(let i in dict){
        console.log(`${i} -> ${dict[i]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])