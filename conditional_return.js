function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let evenNums = isEven(15);

function oddNum(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}

let oddNums = oddNum(100);
console.log(evenNums,oddNums);
