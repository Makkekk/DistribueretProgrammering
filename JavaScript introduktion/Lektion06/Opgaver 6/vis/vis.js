let talInput = document.getElementById("tal")
let tidInput = document.getElementById("tid")

//label til tal
let talLabel = document.createElement('label');
talLabel.textContent = 'Tal: ';
talLabel.setAttribute('for', 'tal');

//label til tid
let tidLabel = document.createElement('label');
tidLabel.textContent = 'Tid: ';
tidLabel.setAttribute('for', 'tid');

talInput.parentNode.insertBefore(talLabel, talInput);
tidInput.parentNode.insertBefore(tidLabel, tidInput);

talInput.addEventListener("click", random);
tidInput.addEventListener("click", setTidspunkt);

function random() {
    let tal = Math.floor(Math.random() * 100);
 talInput.value = tal;
}

function setTidspunkt() {
    let nu = new Date();
    let tid = nu.toLocaleTimeString();
    tidInput.value = tid;
}

let knapRyd = document.querySelector("button");
knapRyd.addEventListener("click", ryd);

function ryd() {
    talInput.value = "";
    tidInput.value = "";
    talInput.focus();
}