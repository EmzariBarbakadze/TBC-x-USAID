const question1 = document.querySelector(".first-question");
const question2 = document.querySelector(".second-question");
const question3 = document.querySelector(".third-question");

const answer1 = document.querySelector(".first-answer");
const answer2 = document.querySelector(".second-answer");
const answer3 = document.querySelector(".third-answer");

const questions = document.querySelector(".questions");
const content = document.querySelector(".questions-content");

question1.addEventListener("click", openFirst);
question2.addEventListener("click", openSecond);
question3.addEventListener("click", openThird);

let checkClick = false;
let checkFirst = false;
let checkSecond = false;
let checkThird = false;
let count = 0;


function returnToOriginal(){
    checkClick = false;
    questions.style.height = "484px";
    content.style.height = "240px";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    question1.style.borderBottom = "1px solid rgb(59, 59, 59)";
    question2.style.borderBottom = "1px solid rgb(59, 59, 59)";
    question3.style.borderBottom = "1px solid rgb(59, 59, 59)";
    document.querySelector(".first-symbol").innerHTML = "&#8891";
    document.querySelector(".second-symbol").innerHTML = "&#8891";
    document.querySelector(".third-symbol").innerHTML = "&#8891";
}


function openFirst(){
    if (checkFirst === false && checkSecond === false && checkThird === false){
        checkFirst = true;
        checkSecond = false;
        checkThird = false;
        questions.style.height = "1038px";
        content.style.height = "794px";
        answer1.style.display = "flex";
        question1.style.borderBottom = "none";
        document.querySelector(".first-symbol").innerHTML = "&#8892";
    }
    else if(checkFirst === true && checkSecond === false && checkThird === false){
        returnToOriginal();
        checkFirst = false;
        checkSecond = false;
        checkThird = false;
    }
    else{
        returnToOriginal();
        checkFirst = true;
        checkSecond = false;
        checkThird = false;
        questions.style.height = "1038px";
        content.style.height = "794px";
        answer1.style.display = "flex";
        question1.style.borderBottom = "none";
        document.querySelector(".first-symbol").innerHTML = "&#8892";
    }
}

function openSecond() {
    if (checkFirst === false && checkSecond === false && checkThird === false){
        checkFirst = false;
        checkSecond = true;
        checkThird = false;
        questions.style.height = "594px";
        content.style.height = "350px";
        answer2.style.display = "flex";
        question2.style.borderBottom = "none";
        document.querySelector(".second-symbol").innerHTML = "&#8892";
    }
    else if(checkFirst === false && checkSecond === true && checkThird === false){
        returnToOriginal();
        checkFirst = false;
        checkSecond = false;
        checkThird = false;
    }
    else {
        returnToOriginal();
        checkFirst = false;
        checkSecond = true;
        checkThird = false;
        questions.style.height = "594px";
        content.style.height = "350px";
        answer2.style.display = "flex";
        question2.style.borderBottom = "none";
        document.querySelector(".second-symbol").innerHTML = "&#8892";
    }
}

function openThird() {
    if (checkFirst === false && checkSecond === false && checkThird === false){
        checkFirst = false;
        checkSecond = false;
        checkThird = true;
        questions.style.height = "524px";
        content.style.height = "280px";
        answer3.style.display = "flex";
        question3.style.borderBottom = "none";
        document.querySelector(".third-symbol").innerHTML = "&#8892";
    }
    else if (checkFirst === false && checkSecond === false && checkThird === true){
        returnToOriginal();
        checkFirst = false;
        checkSecond = false;
        checkThird = false;
    }
    else{
        returnToOriginal();
        checkFirst = false;
        checkSecond = false;
        checkThird = true;
        questions.style.height = "524px";
        content.style.height = "280px";
        answer3.style.display = "flex";
        question3.style.borderBottom = "none";
        document.querySelector(".third-symbol").innerHTML = "&#8892";
    }
}








const image1 = document.querySelector(".image-first");
const image2 = document.querySelector(".image-second");
const image3 = document.querySelector(".image-third");

const swipeLeft = document.querySelector(".left-swiper");
const swipeRight = document.querySelector(".right-swiper");

swipeLeft.addEventListener("click", goLeft);
swipeRight.addEventListener("click", goRight);

let firstImageCheck = true;
let secondImageCheck = false;
let thirdImageCheck = false;


function goLeft() {
    if(firstImageCheck === true){
        firstImageCheck = false;
        thirdImageCheck = true;
        image1.style.display = "none";
        image3.style.display = "flex";
    }
    else if(secondImageCheck === true){
        secondImageCheck = false;
        firstImageCheck = true;
        image2.style.display = "none";
        image1.style.display = "flex";
    }
    else if(thirdImageCheck === true){
        thirdImageCheck = false;
        secondImageCheck = true;
        image3.style.display = "none";
        image2.style.display = "flex";
    }
}

function goRight() {
    if(firstImageCheck === true){
        firstImageCheck = false;
        secondImageCheck = true;
        image1.style.display = "none";
        image2.style.display = "flex";
    }
    else if(secondImageCheck === true){
        secondImageCheck = false;
        thirdImageCheck = true;
        image2.style.display = "none";
        image3.style.display = "flex";
    }
    else if(thirdImageCheck === true){
        thirdImageCheck = false;
        firstImageCheck = true;
        image3.style.display = "none";
        image1.style.display = "flex";
    }
}


setInterval(goRight, 3500);
