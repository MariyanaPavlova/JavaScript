function hastTag(text) {
    
    let textArr = text.split(" ")

    for (let word of textArr) {
        if (word.startsWith('#') && word.length > 1) {
        
        let textToLower = word.toLowerCase();
        let flag = true

        for (let i=1; i< textToLower.length; i++) {
            if (textToLower.charCodeAt(i) < 97 || textToLower.charCodeAt(i) > 122) {
                flag = false
                break
            } 
        }
        if (flag) {
            console.log(word.slice(1))
        }
        }
    }

}

function hastTag(textin) {

    let regex = /#[A-Za-z]+/gm; // /regex/gm - global match
    let matches = textin.match(regex);
   
    for (let w of matches){
        w = w.replace("#","")
        console.log(w);
    }
}
hastTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
//hastTag('The symbol # is known #variously in English-speaking #regions as the #number sign')