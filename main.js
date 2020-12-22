const imageArray = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg"
];

const wrap = document.querySelector('.wrapper');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const currentImg = document.querySelector('.currentImg');

let number= 0;
const imageCount = imageArray.length;

function image(num) {
    if (num === 1) {
        if (number < imageCount - 1) {
            number += 1;
            document.querySelector('.currentImg').style.backgroundImage = 'url(' + imageArray[number] + ')';
            document.querySelector('.description').innerHTML = number + 1 + '/' + imageCount;
        }
    }
    else {
        if (number > 0) {
            number -= 1;
            document.querySelector('.currentImg').style.backgroundImage = 'url(' + imageArray[number] + ')';
            document.querySelector('.description').innerHTML = number + 1 + '/' + imageCount;
        }
    }
}


const  btnShow = () => {
    if (number != 0) leftBtn.style.display = 'block';
    if (number != imageCount - 1) rightBtn.style.display = 'block';
}

const btnNoShow = () => {
    rightBtn.style.display = 'none';
    leftBtn.style.display = 'none';
}

currentImg.addEventListener('mouseover', btnShow);
currentImg.addEventListener('mouseout', btnNoShow);

rightBtn.addEventListener('mouseover', btnShow);
rightBtn.addEventListener('mouseout', btnNoShow);

leftBtn.addEventListener('mouseover', btnShow);
leftBtn.addEventListener('mouseout', btnNoShow);