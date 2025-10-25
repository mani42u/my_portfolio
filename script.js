let menu = document.querySelector('.menu');
let menuBtn = document.getElementById('menu-bar');
let closeBtn = document.getElementById('close-btn');

function showMenu () {
    menu.style.display = 'flex';
    menuBtn.style.display='none'
    closeBtn.style.display='block'
}

function hideMenu () {
    menu.style.display = 'none';
    menuBtn.style.display='block'
    closeBtn.style.display='none'
}