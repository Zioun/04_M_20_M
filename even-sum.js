let arraData = [1,2,3,4,5,6];
function funName (arraData){
    let sum = 0;
    for(data of arraData){
        if(data % 2 === 0){
            sum += data;
        }
    }
    return sum;   
}
let funcall = funName(arraData);
console.log(funcall);