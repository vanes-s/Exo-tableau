// let myAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
//   "T","U","V","W","X","Y","Z","$","*","/","-","+",];
// function myAlphabetLength() {
//     console.log(myAlphabet.length);
// }
// myAlphabetLength();
// // 31
// let planets = [ "terre","jupitaire","mars","lune","venus"];
// planets.forEach((planet,index)  => {
//     console.log(planet,index);
// });


// let someDataTypes = ["string", 1, true, null];

// someDataTypes.forEach((someDataType , index) => {
//     console.log(typeof someDataType,index); 
// });
let furnitures = ['Table', 'Chairs','Couch'];
furnitures.forEach(furniture => {
    console.log(furniture);   
});
let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , 'true'];
let values3 = ["Mars", "Strawberry", 9];

let newArrayvalues =values1.concat(values2, values3);
newArrayvalues.forEach((newArrayvalue) => {console.log(newArrayvalue);
});
let vanessa = newArrayvalues.filter(Number);

console.log(vanessa);



