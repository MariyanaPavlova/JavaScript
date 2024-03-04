function cityKeyValue(cityInfo) {

    for (let i of Object.entries(cityInfo)) {
        let [key, value] = i;
        console.log(`${key} -> ${value}`)
    }
}
cityKeyValue({
    name: "Sofia",  
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})