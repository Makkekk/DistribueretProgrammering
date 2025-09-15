// Tilføj kode for opgave 5.1 - 5.5 her!

//opgave 5.1
document.querySelectorAll('p').forEach((afsnit) => { afsnit.style.color = 'red' });


//opgave 5.2

for (let e of document.querySelectorAll('h1 + * + *')) {
    e.style.color = 'Brown';
}

// eller bøvl
/*let overskrift = document.querySelectorAll('h1');

for (let i = 0; i < overskrift.length; i++) {
    let firstSibling = overskrift[i].nextElementSibling;
    if (firstSibling) {
        let secondSbiling = firstSibling.nextElementSibling;
        if (secondSbiling) {
            secondSbiling.style.color = 'Brown';
        }
    }
}
    */

//opgave 5.3
// for (let even of lis = document.querySelectorAll('ul li:nth-child(odd)')) {
   // event.style.backgroundColor = 'lightgrey';

let items = document.querySelectorAll('ul li');
for (let i = 1; i < items.length; i += 2) { // start at 1 and skip every 2
    items[i].style.backgroundColor = 'lightgrey';


}


//opgave 5.4


//Løsningsmodel 1
for (let e of document.querySelectorAll('h1 + p')) {
    let h2Node = document.createElement('h2')
    e.parentNode.replaceChild(h2Node, e)
    h2Node.appendChild(e)
    h2Node.style.color = 'blue'
    //løsningsmodel 2 
    //e.outerHTML = '<h2>' + e.innerHTML + '</h2>'
    
}


//opgave 5.5
let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

for (let i = 0; i < headings.length; i++) {
    let h1 = headings[i];

    h1.id = 'heading' + (i + 1); // Hver overskrift får et unikt id
}

let toc = document.createElement('div');
toc.id = 'toc';

document.body.insertBefore(toc, document.body.firstChild);

for (let i = 0; i < headings.length; i++) {
    let h1 = headings[i];

    let link = document.createElement('a');
    link.href = '#' + h1.id;
    link.innerText = h1.innerText;
    link.style.display = 'block';

    toc.appendChild(link);
}