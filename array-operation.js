function sumOfNumbers(data){
    let sum = 0;
    for(let num of data){
        sum += num; 
    }
    return sum; 
    
    
}
const arrayData = [10,20,30,40,50,60,70];
const funName = sumOfNumbers(arrayData);
console.log("Array Data Sum Is :", funName);