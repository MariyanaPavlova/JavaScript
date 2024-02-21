function solve(text) {
    
    let reg = /[A-Z][a-z]*/g;
    let matches= text.match(reg);

    console.log(matches.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')