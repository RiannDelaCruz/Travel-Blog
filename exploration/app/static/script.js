// JavaScript source code
const slides = document.querySelectorAll('.slider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slide(counter);
let timer = setInterval(autoslide, 6000);
function autoslide() {
    counter += 1;
    slide(counter);
}

function plusslide(n) {
    counter += n;
    slide(counter);
    resetTimer();
}

function currentslide(n) {
    counter = n;
    slide(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 6000);
}

function slide(n) {
    let s;
    for (s = 0; s < slides.length; s++) {
        slides[s].style.display = 'none';
    }
    for (s = 0; s < dot.length; s++) {
        dot[s].classList.remove('active');
    }
    if (n > slides.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = slides.length;
    }
    slides[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}