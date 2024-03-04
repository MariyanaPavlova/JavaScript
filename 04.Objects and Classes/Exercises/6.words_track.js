function wordTrack(words) {

    let dict = {}
    let first = words.shift()

    for (let i of first.split(" ")){
        dict[i] = 0
    }

    for (let w of words){
        if (dict.hasOwnProperty(w))
        dict[w] +=1
    }

    let sortV = Object.entries(dict).sort((a, b) => {
        return b[1] - a[1]})
    
        
    for (let [key,value] of sortV) {
        console.log(`${key} - ${value}`)
        
    }
    
}

wordTrack([
    'sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
wordTrack([
    'is the first', 
    'first', 'sentence', 'Here', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])