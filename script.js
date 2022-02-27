const titleText = document.querySelector('.h1');
titleText.onclick = function(){
    titleText.textContent = 'Очень рады вас видеть';
}
// Задание 2
const img = document.querySelector ('.image');
img.onclick = function(){
    let myScr = img.getAttribute ('src');
    if (myScr === 'img/like.png'){
        img.setAttribute('src', 'img/dislike.png');
    }else{
        img.setAttribute('src', 'img/like.png');
    }
}
// Задание 3
let i=0;
let text= '6 Rue de l"Amiral de Coligny, Paris';
let speen = 100;
const btnClick = document.querySelector('.btn');
function typeText(){
    if (i<text.length){
        document.querySelector('.textPrint').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speen);
    }
}
btnClick.addEventListener('click', typeText);
// Задание 4
textInfo();
function textInfo(){
    setTimeout(one, 1000);
    setTimeout(two, 3000);
    setTimeout(three, 5000);
}
function one(){
    document.querySelector('.text-p').innerHTML = 'Февральская акция';
}
function two(){
    document.querySelector('.text-p').innerHTML = '-30% на стоимость билетов ';
}
function three(){
    document.querySelector('.text-p').innerHTML = 'успейте приобрести по акции.';
}