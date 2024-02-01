const links = document.querySelector(".links");
const menu = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const imgAll = document.querySelectorAll(".connect")
const middleImgCard = document.querySelector(".middle-img-one");
menu.addEventListener("click",function(e) {
    links.style.top = "0";
    document.body.style.overflow = "hidden";
});
close.addEventListener("click",function(e) {
    links.style.top = "-200%";
    document.body.style.overflow = "auto";

});

// if(window.innerWidth <= 575){
//     // console.log(middleImgCard);
//     middleImgCard.classList.remove("middle-img");
// }