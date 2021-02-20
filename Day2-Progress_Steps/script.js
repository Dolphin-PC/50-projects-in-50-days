const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
update();

next.addEventListener('click', handleClickNext);
prev.addEventListener('click', handleClickPrev);

function handleClickNext() {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
}
function handleClickPrev() {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
}

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    const progressPercentage = ((actives.length - 1) / (circles.length - 1)) * 100;

    progress.style.width = `${progressPercentage}%`;

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}