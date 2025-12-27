// Part one of Exercie 25
const Array1=[1,2,3]
const Array2=[...Array1,4,5,6]
console.log(Array2);

// Part Two of Exercise 25
function multiplication(...numbers){
 return numbers.reduce((total, multi)=> total * multi)
}
console.log(multiplication(8,10,1000));