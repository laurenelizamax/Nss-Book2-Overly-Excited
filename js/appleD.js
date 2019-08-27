
console.log("yay little debbie");

const sweetArray =  [
{ 
    name: "Apple Deligtts",
    event: "Back to School",
    count: 8
},
{   name: "Punmpkin Delight",
    event: "Fall Festival",
    count: 8
},
{   name: "Happy Camper",
    event: "Summer Time",
    count: 4
}
]

const createSweet = (item, index) => {
  return `
   <div>
    <h2>${index +1} ${item.name}</h2>
    <p>${item.event}</p>
    <p>${item.count}</p>
  </div>
  `
}
const sweetContainer =document.querySelector("#container")

// for (let i =0; i < sweetArray.length; i++) {
//     console.log("loop of the array", i, sweetArray[i]);
// sweetContainer.innerHTML += createSweet(sweetArray[i]);
// }

sweetArray.forEach((sweetItem, index) => {
    sweetContainer.innerHTML += createSweet(sweetItem, index);
});





//console.log(createSweet());


/* these all create the same function
const createSweet = ( ) => { 
    
function createSweet () {
}
const sweet = function sweet () {
} */