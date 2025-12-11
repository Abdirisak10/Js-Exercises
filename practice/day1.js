
// Function declaration
function greet(){
 console.log("Assalamu aleykum mudanayaal")
}
greet();

function Salaan (greet){
    console.log("Mudanayaal iyo Marwooyin" +greet);
}
Salaan("Aad baan idin salaamayaal qof walbana maqaamka uu halkan ku joogo ayaan ku salamayaa")


function calculate(price, quantity){
    return price * quantity
}
let result = (calculate(10,3))
console.log(result);


// 2 Function Exprssion

const name=function(){
    console.log("hello ")
}
name();

// Arrow function
const firsName=()=>{
    console.log("Mudane Assalamu aleykum");
}
firsName();


// Scope -Local -Global

// Local
function localVariable(){
    localshow="Hakani waa doorsomaha gudaha";
    console.log(localshow)
}
localVariable();

// Global

globalShow="Halkanna waa doorsomaha Guud and Global Variable"
function localV(){
    console.log(globalShow);
}
localV();


// block scope
{
    let variableblock="I'M BLOCK SCOPE "
    console.log(variableblock);
}