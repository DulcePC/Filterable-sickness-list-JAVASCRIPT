$(document).ready(function () {
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
});

const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const ul = document.getElementById('names');
    const li = ul.querySelectorAll('li.collection-item');
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }

}