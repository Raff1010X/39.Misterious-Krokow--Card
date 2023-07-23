var scene = document.getElementById("scene");
var card = document.getElementById("card");
var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");
var text3 = document.getElementById("text-3");
var picture1 = document.getElementById("picture-1");
var picture2 = document.getElementById("picture-2");
var picture3 = document.getElementById("picture-3");
var buttonFront = document.getElementById("reverse-front");
var buttonBack = document.getElementById("reverse-back");

document.getElementById("reverse-back").addEventListener("click", onReverseBack);
document.getElementById("reverse-front").addEventListener("click", onReverseFront);


function onReverseFront() {
    card.classList.add("card-rotate");
    scene.classList.add("scene-enlarge");
    buttonFront.style.zIndex = "0";
    buttonBack.style.zIndex = "1000";
}

function onReverseBack() {
    card.classList.remove("card-rotate");
    scene.classList.remove("scene-enlarge");
    buttonFront.style.zIndex = "1000";
    buttonBack.style.zIndex = "0";
}

picture1.addEventListener("mouseover", function() { onPictureMouse(1); });
picture2.addEventListener("mouseover", function() { onPictureMouse(2); });
picture3.addEventListener("mouseover", function() { onPictureMouse(3); });
picture1.addEventListener("mouseout", function() { onPictureMouseOff(1); });
picture2.addEventListener("mouseout", function() { onPictureMouseOff(2); });
picture3.addEventListener("mouseout", function() { onPictureMouseOff(3); });

function onPictureMouse(_textNumber) {
    if (_textNumber === 1) text1.classList.add("onmouse-color-red");
    if (_textNumber === 2) text2.classList.add("onmouse-color-red");
    if (_textNumber === 3) text3.classList.add("onmouse-color-red");
}

function onPictureMouseOff(_textNumber) {
    if (_textNumber === 1) text1.classList.remove("onmouse-color-red");
    if (_textNumber === 2) text2.classList.remove("onmouse-color-red");
    if (_textNumber === 3) text3.classList.remove("onmouse-color-red");
}

text1.addEventListener("mouseover", function() { onTextMouse(1); });
text2.addEventListener("mouseover", function() { onTextMouse(2); });
text3.addEventListener("mouseover", function() { onTextMouse(3); });
text1.addEventListener("mouseout", function() { onTextMouseOff(1); });
text2.addEventListener("mouseout", function() { onTextMouseOff(2); });
text3.addEventListener("mouseout", function() { onTextMouseOff(3); });

function onTextMouse(_textNumber) {
    if (_textNumber === 1) picture1.classList.add("picture-hover");
    if (_textNumber === 2) picture2.classList.add("picture-hover");
    if (_textNumber === 3) picture3.classList.add("picture-hover");
}

function onTextMouseOff(_textNumber) {
    if (_textNumber === 1) picture1.classList.remove("picture-hover");
    if (_textNumber === 2) picture2.classList.remove("picture-hover");
    if (_textNumber === 3) picture3.classList.remove("picture-hover");
}