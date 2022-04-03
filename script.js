const spans = document.querySelectorAll('span');
const p = document.querySelectorAll('p');
const arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < p.length; i++) {
    let element = p[i];
    spans[i].classList.add('hidden');
    element.addEventListener('click', () => {
        spans[i].classList.toggle('hidden');
        arrows[i].classList.toggle('flip');
        p[i].classList.toggle('dark');
    });
}