// 1-Function Declaration

function greet(){
    console.log("Assalamu aleykum walalayaal")
}
greet();

// Function parameters and Argument 
 function firstName(lastname){
    console.log("Abidirizaak " + lastname)
 }

 firstName("Ali Mohamed");

// Useful Example of parameters and arguments
function calculate(price, quantity){
    console.log("the price is: $" +price * quantity);

}
calculate(3,10);

// Another Useful Example
function registerUser(User,Email){
    console.log('User: '+ User ,'Email: '+Email);

}
registerUser("Abdi00007" , "abdirisak@gmail.com")


// Parameters and argument return value
function xisaabiye (x,y){
 return x+y;
}
let natiijo =xisaabiye(10,30);
console.log(natiijo / 3);




// 2 - Function Expression
let salaaman=function(){
 console.log("salaaman guys");
}
salaaman();

// Another one of function expression
let names=function(firstname,lastname){
    console.log("Your Full Name Is: ", firstname , lastname);
}
names("Abdirisak", "Ali Mohamed");


// 3 arrow function ES6
const magaalo=()=>{
    console.log("Halkani waa Dagmada Jowhar Caasimada mamul goboledka Hirshabelle");
}
magaalo();


// another Example
const isbarBardhig=(Jowhar,Baladweyne)=>{
    console.log("Qor labadan magaalo waxaa ka taqaano", 'Jowhar:' +Jowhar, 'Baladweyne:' +Baladweyne);
    
}
isbarBardhig(" waa magaalo nuucee ah." ," waa magalo nuucee ah");



console.log("Scope")


// Global Scope
const age=20;
function daDa(){
console.log(age);
}
daDa();



// Local Scope
console.log("Local Scope")
function localScope(){
    let dadada = 30;
    console.log(dadada);
}
localScope();

// Block Scope

console.log("Block Scope")

{
    let name ="Abdirisak Ali Mohamed"
    console.log(name);
}
