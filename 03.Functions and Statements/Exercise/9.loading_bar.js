function loadingBar(n) {
    
    let n10 = n/10
    let result = []

    for (i=1; i <= 10; i++)
        if (i <= n10) {
            result.push("%")
        } else{
            result.push('.')
        }
    if (n ==100){
        console.log("100% Complete!")
        console.log(`[${result.join('')}]`)
        
    } else {
        console.log(`${n}% [${result.join('')}]`)
        console.log('Still loading...')
    }  
}

function loadingBar(n) {
    if(n ===100){
        console.log(`100% Complete!`);
    } else{
        let percent = '%'.repeat(n/10);
        let dots = ('.').repeat(percent.length);
        
        console.log(`${n}% [${percent}${dots}]`);
        console.log('Still loading...')
    }
  
}


loadingBar(30)
loadingBar(50)
loadingBar(100)
