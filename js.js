let n ; 
 display();
function display( ) {
     for (let i = 0; i < 100; i++) {
       console.log(i);
     }
}
for (let i = 0; i < 100; i++) {
  if ( (i % 3 === 0)  ) {
    console.log("fizz");
  } 
 else if ((i % 5 ===0)) {
    console.log("buzz");
 }
 else if ((i % 5 !=0) || ( i % 3 !=0) )
  console.log("fuzzy buzz");
}
let string = 'hello';
let string1 = 'hello';
console.log(string1)
let array = ["amir","ing" ];
let array1 = ["hoho" , "myth", "beach house" ];
let array2 = [...array , ...array1];
console.log(array2); 

function sum(...numbers) {
  let result = 0 ;
  for (let number of numbers){
    result+= number;
  }
  return result;
}
const total = sum (1,2);
console.log( `your total is $${total}`);
function getave(...numbers) {
  let result = 0 ;
  for (let number of numbers){
    result+= number;
  }
return result /numbers.length
}
const total1 = getave(75,55);
console.log(total);