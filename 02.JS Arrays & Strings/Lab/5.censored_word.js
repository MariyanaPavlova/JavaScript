function sensWord (text, word){
    

    while (text.includes(word))   {
        let wordstars = "*".repeat(word.length) 
        text = text.replace(word, wordstars)
    }

    console.log(text)

}

sensWord('A small sentence with some words', 'small' )