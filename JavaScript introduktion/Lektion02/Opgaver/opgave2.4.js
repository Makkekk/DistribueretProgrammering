//opgave 2.4

const tekst = 'Tortitaq er en stor snyder Tortitaq snyder'

//Gemmer count fungere som et map key = word, value = antal gange
const ordCount = {}


//splitter ordet indtil et array af ord
const words = tekst.split(' ');


for (let ord of words) {
    if (ordCount[ord]) {
        ordCount[ord]++;
    } else {
        ordCount[ord] = 1;    
    }
}

console.log(ordCount['snyder']);

console.table(ordCount);


