function oddOccur(input){

    let odd = {}
    
    for (let w of input.split(' ')){
       
        let wl = w.toLowerCase()
        if (odd.hasOwnProperty(wl)){
            odd[wl] +=1

        }else{
            odd[wl] = 1
        }
        
    }
    let out = []
    for (let [key, value] of Object.entries(odd)) 
        if (value % 2 != 0){
            out.push(key)
        }
    console.log(out.join(' '))

}
oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccur('Cake IS SWEET is Soft CAKE sweet Food')