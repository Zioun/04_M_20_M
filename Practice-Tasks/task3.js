// ? Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function integerCount (numArray){
    let store = 0;
    for(let catcher of numArray){
        if(catcher % 2 == 0){
            store += catcher;
        }
    }
    return store;
}
let numArray = [10, 11, 20, 21, 30, 31, 40, 41, 50, 51];
let result = integerCount(numArray);
console.log(result);