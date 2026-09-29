for(let i = 1; i <= 150; i++){

    let num = i;
    let sum = 0;

    while(num > 0){

        let digit = num % 10;
        let fact = 1;

        for(let j = 1; j <= digit; j++){
            fact = fact * j;
        }

        sum = sum + fact;
        num = Math.floor(num / 10);
    }

    if(sum == i){
        console.log(i);
    }
}