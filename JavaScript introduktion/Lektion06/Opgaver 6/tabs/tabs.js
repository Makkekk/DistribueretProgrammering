// tabs.js
const tabs = document.querySelectorAll('h2 span');
const contents = document.querySelectorAll('h1');


function activateTab(tabIndex) {
    //hide tabs
    contents.forEach(contents => { contents.style.display = 'none'; 
    });

    //vis valgte tab
    contents[tabIndex].style.display = 'block';

    tabs.forEach(tab => {
        tab.removeAttribute('data-valgt')
});

    tabs[tabIndex].setAttribute('data-valgt', '');
}

//tilføj eventlistener til hver tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(index));
});

    activateTab(0); //vis første tab ved start
