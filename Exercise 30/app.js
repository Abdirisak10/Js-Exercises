function operate(a,b, callback){
    return callback(a,b)
}
function add(a,b){
    return a + b;
}
function subtr(a,b){
    return a - b;
}
function multip(a,b){
    return a * b;
}
function divi(a,b){
    return a / b;
}

console.log("Isku darku waa : ", operate(3, 5 , add))
console.log("kala jarku waa :", operate(5,3,subtr));
console.log("taranka labada tiro waa : ", operate(5,5,multip));
console.log("isku qeybinta labada tiro waa: ",operate(49,8, divi));