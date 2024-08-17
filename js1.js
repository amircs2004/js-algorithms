

/*let x 
function fibbocci(x) {
    const seqeunce = [0 , 1];
    for (let i = 2; i < x; i++) {
       seqeunce.push(seqeunce[i-1]+seqeunce[i-2]);
        return seqeunce ;
    }
}
const result = fibbocci(10);
console.log(result)
*/
let x = 30; 
function fibbiocci(x) {
    let S = [0,1];
    for (let i = 2; i < 30; i++) {
     S.push(S[i -1] + S[i-2]);
    
        return S ;
    }
}
const result = fibbiocci(30);
console.log(result) ;
////////////buggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg