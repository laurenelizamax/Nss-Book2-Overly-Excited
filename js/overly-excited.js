
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees",
"in","the","light","of","the","moon"];

    const addExcitement = (theWordArray, punctuation, amount) => { 
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let symbol = punctuation;

    for (let i = 1 ; i < amount; i++) {
        symbol += punctuation; 
      }
    for (let i = 0; i < theWordArray.length; i++) {
       if ((i + 1) % 3 === 0) {
            buildMeUp += ' ' + theWordArray[i] + symbol ;

        } else {
            buildMeUp +=  ' ' + theWordArray[i]
        }
        console.log(buildMeUp);

    }
}
// addExcitement(sentence, "...") 
// addExcitement(sentence, "?") 
// addExcitement(sentence, "!") 
addExcitement(sentence, "*", 4)

// function addExcitement (theWordArray, punctuation, amount) {
