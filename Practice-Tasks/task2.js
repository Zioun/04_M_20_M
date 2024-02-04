// ? Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function converter (num){
    if(num % 2 == 1){
        let multiply = num * 2;
        console.log(multiply)
    }else{
        let division =num / 2
        console.log(division)
    }
}
let result = converter(51);