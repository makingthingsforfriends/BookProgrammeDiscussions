//main.js by yshe735

var slider_img = document.querySelector('.slider-img');
var images = ['member01.jpg', 'member02.jpg', 'member03.jpg'];
var i = 0;

function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', images[i]);
}

document.getElementById('trigger-modal').addEventListener("click", function(){

    document.querySelector('#bookclubrego').style.display = "flex";
});

document.querySelector('.close-icon').addEventListener("click", function() {
	document.querySelector('#bookclubrego').style.display = "none";
});

document.getElementById('trigger-modal2').addEventListener("click", function(){

    document.querySelector('#bookclubrego').style.display = "flex";
});

document.querySelector('.close-icon').addEventListener("click", function() {
	document.querySelector('#bookclubrego').style.display = "none";
});

document.getElementById('form-join-btn').addEventListener("click", function(){
    document.querySelector('#bookclubrego').style.display = "none";
    document.querySelector('.form-confirmation').style.display = "flex";
});

document.getElementById('close-btn').addEventListener("click", function(){
    document.querySelector('.form-confirmation').style.display = "none";
});