const scene = document.querySelector('.scene');
const img = document.querySelector('.imagenes');
const sceneOne = document.querySelector('.scene-1');
const sceneTwo = document.querySelector('.scene-2');
const sceneThree = document.querySelector('.scene-3');
const sceneFour = document.querySelector('.scene-4');

setTimeout(() => {
    img.classList.remove('d-none');
}, 5000);

setTimeout(() => {
    scene.classList.add('d-none');
    sceneOne.classList.remove('d-none');
}, 10000);

setTimeout(() => {
    sceneOne.classList.add('d-none');
    sceneTwo.classList.remove('d-none');
}, 18000);

setTimeout(() => {
    sceneTwo.classList.add('d-none');
    sceneThree.classList.remove('d-none');
}, 24000);

setTimeout(() => {
    sceneThree.classList.add('d-none');
    sceneFour.classList.remove('d-none');
}, 32000);