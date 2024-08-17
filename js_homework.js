/**
 * first proplem
 */
   let message = "There is no war in Ba Sing Se";
   function challengeOne(message) {
    return message.length;
   }
   console.log(message.length) ;


 /*my attempt */ 
  const sentence = "This is a sentence with multiple words";
  // const wordCount = countWords(sentence);
  // console.log(wordCount); 
   ///////////////////////////////////////////////////
   /*
   for (let i = 0; i < countries.length; i++) {
    const element = countries[i];  
    for (let j = 0; j < capital.length; j++) {
      const element1 = capital[j];
      if (element === countries[0]) {
        let cap0;
        cap0 = element1[0];
        console.log (cap0);
        }
        }
        if (element === 'japan') {
          let cap1;
          cap1 = capital[1];
          console.log (cap1);
          }
          else if (element === 'south korea ') {
            let cap2;
            cap2 = capital[2];
            }
            }  
            */
           /*my attempt */ 
           
           let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
           let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];
           for (let i=0; i<5; i++){
             console.log(countries[i]+ ' ' + capital[i]);
           }
          
//=== checks both type and value || ==checks the value no matter the type of the data :)

/*third problem*/ 

let randomizer = Math.floor(Math.random()*3);
console.log(randomizer) ;
if (randomizer=== 0) {
    console.log("A certain victory");
}else if (randomizer === 1){
  console.log("not so certain victory");
} else if (randomizer === 2) {
   console.log("an uneasy victory");
} 
/* fourth problem*/ 

let season = 12;
switch (season) {
  case 1:
    case 2 :
      case 3 :
        console.log("winter")
    break;
   case 4 : 
   case 5 : 
   case 6 : 
   console.log("spring") ; 
   break;
    case 7 : 
    case 8 : 
    case 9 : 
    console.log("summer");
    case 10 : 
    case 11 : 
    case 12 : 
    console.log("autumn");
    break;
   default:
    console.log("not a season");
   break;
}
function checkedSeason(season) {
   let Season = 12 ; 
  return Season ;
}
