// ? Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function binary(binary){
    let store = "";
    for(let catcher of binary){
        if(catcher == 0){
            store += catcher;
        }
    }
    let storeCon = store.length;
    return storeCon;
}
let binaryArray = [0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0];
let result = binary(binaryArray);
console.log(result);