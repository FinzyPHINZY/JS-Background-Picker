//DOM manipulation to run a function after the boxes have been clicked

document.getElementById('blue').addEventListener('mouseover', switchBlue);
document.getElementById('black').addEventListener('mouseover', switchBlack);
document.getElementById('thistle').addEventListener('mouseover', switchThisle);
document.getElementById('grey').addEventListener('mouseover', switchGrey);

//Create the functions instructing the browsers to change the background images and color


function switchBlue() {
    document.querySelector('body').style.backgroundColor = 'cornflowerblue';
}

function switchBlack() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white'
}

function switchThisle() {
    document.querySelector('body').style.backgroundColor = 'Thistle';
}

function switchGrey() {
    document.querySelector('body').style.backgroundColor = 'darkgrey';
}



