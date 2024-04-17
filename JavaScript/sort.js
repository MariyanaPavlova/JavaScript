function arrSort() {
    
    let arr = [5000, 1000, 1500, 200];
    let numb = arr.sort((a, b) => {
        return b - a
    });

    console.log(numb)
}
arrayAdv()

function arrSortNames() {
    
    let arr = ['Petq', 'Ivan', 'Asq', 'Misho'];
    let sortedNames = arr.sort((a, b) => {
        return a.localeCompare(b);
        //return a.length - b.length сортира по дълж.
    });

    console.log(sortedNames)
}
arrSortNames()

