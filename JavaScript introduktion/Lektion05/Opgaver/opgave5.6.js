const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// --- Styling med JS ikke CSS ---

// h1, rød og centreret
let heading = document.querySelector('h1');
heading.style.color = 'red';
heading.style.textAlign = 'center';

// #mountainTable styling
let table = document.querySelector('#mountainTable');
table.style.width = '40%';
table.style.margin = '20px auto';
table.style.borderCollapse = 'collapse';
table.style.border = '4px solid blue';
table.style.boxShadow = '2px 2px 6px gray';

// th styling
document.querySelectorAll('#mountainTable th').forEach((th) => {
    th.style.padding = '8px';
    th.style.border = '2px solid blue';
});

// tbody td styling
document.querySelectorAll('#mountainTable td').forEach((td) => {
    td.style.border = '2px solid blue';
    td.style.padding = '8px';
});

// --- Table content from MOUNTAINS ---

let tableBody = document.querySelector('#mountainTable tbody');

for (let i = 0; i < MOUNTAINS.length; i++) {
    let mountain = MOUNTAINS[i];

    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.textContent = mountain.name;

    let heightCell = document.createElement('td');
    heightCell.textContent = mountain.height;

    let placeCell = document.createElement('td');
    placeCell.textContent = mountain.place;

    // style td direkte 
    [nameCell, heightCell, placeCell].forEach((cell) => {
        cell.style.border = '2px solid blue';
        cell.style.padding = '8px';
    });

    row.appendChild(nameCell);
    row.appendChild(heightCell);
    row.appendChild(placeCell);

    tableBody.appendChild(row);
}




// styling med CSS
/*let tableBody = document.querySelector('#mountainTable tbody');

for (let i = 0; i < MOUNTAINS.length; i++) {
    let mountain = MOUNTAINS[i];

    //create row
    let row = document.createElement('tr');

    //create cells
    let nameCell = document.createElement('td');
    nameCell.textContent=mountain.name;

    let heightCell = document.createElement('td');
    heightCell.textContent=mountain.height;

    let placeCell = document.createElement('td');
    placeCell.textContent=mountain.place;

    row.appendChild(nameCell);
    row.appendChild(heightCell);
    row.appendChild(placeCell);

    tableBody.appendChild(row);
}
*/