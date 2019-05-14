'use strict';

const avatar = document.getElementById('avatar');
const page = document.getElementsByClassName('page')[0];
avatar.addEventListener('mouseover', showBackground);
avatar.addEventListener('mouseout', showBackground);
avatar.addEventListener('click', changePageOpacity);

function showBackground() {
    page.classList.toggle('background-appear');
    avatar.classList.toggle('avatar-disappear');
}

function changePageOpacity() {
    page.classList.toggle('page-opacity');
    avatar.classList.toggle('avatar-opacity');
}
