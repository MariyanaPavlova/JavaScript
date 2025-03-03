
function arrSort() {
    
    let arr = [5000, 1000, 1500, 200];
    let sortN = arr.sort() //ще ги сортира като стринг 1000,1500,200,5000
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

//Objects cannot be sorted; they must be converted first
//Convert to array for sorting, filtering and mapping

let phonebook = { 'Tim': '0876566344',
                 'Bill': '0896543112' };

let entries = Object.entries(phonebook);
console.log(entries); // Array of arrays with two elements each
    // [ ['Tim', '0876566344'],
    // ['Bill', '0896543112'] ]
let firstEntry = entries[0];
console.log(firstEntry[0]); // Entry key -> 'Tim'
console.log(firstEntry[1]); // Entry value -> '0876566344'

----------
function addressBook(input) {
    let addressbook = {};
    
    for (let line of input) {
        let [name, address] = line.split(':');
        addressbook[name] = address;
    }
let sorted = Object.entries(addressbook);
sorted.sort((a, b) => a[0].localeCompare(b[0])); //sort

entries.sort(([keyA, valueA],[keyB, valueB]) => [keyA].localCompare([keyB]);


}
addressBook(
['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
