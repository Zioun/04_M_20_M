function evenSizeString(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log("Even String");
        return true;
    }else{
        console.log("Odd String");
        return false
    }
}
evenSizeString("Hello Bangladesh!");


function doDouble(num,check){
    if(check == true){
        let duigun = num * 2;
        return duigun;
        
    }else{
        let tingun = num * 3;
        return tingun;
    }
}
console.log(doDouble(50,true));


function numberOfElements(numbers){
    let numlg = numbers.length;
    console.log(numlg);
    return numlg;
    
}

numberOfElements([10,30,40,56,60,67]);


function objNm(keyName){
    console.log(keyName.name.length);
}
objNm({name:"Dhaka"})