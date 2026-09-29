let n = 5;
for(let i = 1; i <= n; i++){
    let row = "";

    for(let j = 1; j <= 2*i-1; j++){
        row += " ";
    }

    for(let k = 1 ; k <= n-1 ; k++){
      row += "*"
    }
 console.log(row);
}

