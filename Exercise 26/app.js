function sooDaahid(callback){
    alert("maxaa laguu daabacaa")
    setTimeout(()=>{
        console.log("Dalabkeena wuxuu qaatay 2bo seconds maxaa sababay mudane")
    },2000)
}
console.log("-------BLOCKING---------")
const soodah=sooDaahid()
console.log("waa lasoo daahday dalabka")

console.log("------- NON BLOCKING ---------")