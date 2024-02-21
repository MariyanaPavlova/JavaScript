function sortNames(names) {

    names.sort((a, b) => a.localeCompare(b));
        
    let i=1;
    for (let name of names){
        console.log(`${i}.${name}`);
        i++
    }
    
}

console.log()
sortNames(["John", "Bob", "Christina", "Ema"])