const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let tableBody = document.querySelector('#mountainTable tbody');

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