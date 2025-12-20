const people=[
    {name:"abdi", age:"26", city:"Middle-shabelle"},
    {name:"Bob", age:"30", city:"mogadishu"},
    {name:"charlie", age:"40", city:"Factory"}
]
console.log("properties and values of each One")

for(let person of people){

  for(let persons in person){
    console.log(persons + ":"+person[persons])
}
 console.log("-----")

}




