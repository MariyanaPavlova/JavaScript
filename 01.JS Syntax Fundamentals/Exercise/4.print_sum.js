function solve(start, end) {

  let summ = 0;
  //let output = [];
  let output = "";

  for (i = start; i <= end; i++) {
    summ += i;
    //output.push(i);
    output += i + " ";
  }

  //console.log(output.join(" "));
  console.log(output)
  console.log(`Sum: ${summ}`);
  
}
solve(5, 10);
solve(0, 26);
