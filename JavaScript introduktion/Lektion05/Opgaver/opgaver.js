// Tilføj kode for opgave 5.1 - 5.5 her!

//opgave 5.1
document.querySelectorAll('p').forEach((afsnit) => { afsnit.style.color = 'red' });


//opgave 5.2
let overskrift = document.querySelectorAll('h1');

for (let i = 0; i < overskrift.length; i++) {
    let firstSibling = overskrift[i].nextElementSibling;
    if (firstSibling) {
        let secondSbiling = firstSibling.nextElementSibling;
        if (secondSbiling) {
            secondSbiling.style.color = 'Brown';
        }
    }
}

//opgave 6.3

let items = document.querySelectorAll('ul li');

/*
for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
        items[i].style.backgroundColor = 'LightGray';
    }
}

*/

for (let i = 1; i < items.length; i += 2) { // start at 1 and skip every 2
    items[i].style.backgroundColor = 'lightgrey';
}


//opgave 5.4

let underoverskrift = document.querySelectorAll('h1');

for (let i = 0; i < underoverskrift.length; i++) {
    let p = underoverskrift[i].nextElementSibling;

    if (p && p.tagName === 'P') {
        let h2 = document.createElement('h2');
        h2.innerHTML = p.innerHTML;

        p.parentNode.replaceChild(h2, p);
    }
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