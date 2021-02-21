const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', handleClickOpen);
close.addEventListener('click', handleClickClose);

function handleClickOpen() {
    container.classList.add('show-nav');
}
function handleClickClose() {
    container.classList.remove('show-nav');
}
