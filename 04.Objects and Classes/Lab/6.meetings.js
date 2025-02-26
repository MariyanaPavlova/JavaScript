function meetings(array){

    let meetings = {};

    for (let i of array){
        const[day,name] = i.split(' ');

        if (meetings[day]){
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    Object.keys(meetings).forEach((day) => {
        console.log(`${day} -> ${meetings[day]}`)
    })
   
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
