document.getElementById('pink').onclick = playPink;
document.getElementById('yellow').onclick = playYellow;
document.getElementById('green').onclick = playGreen;
document.getElementById('blue').onclick = playBlue;

function playPink () {
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('body').style.color = 'white';
}

function playYellow () {
    document.querySelector('body').style.backgroundColor = 'yellow';
    document.querySelector('body').style.color = 'white';
}

function playGreen () {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color = 'white';
}

function playBlue () {
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('body').style.color = 'white';
}