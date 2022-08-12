console.log("Amit")

document.querySelector('.r-btn').addEventListener('click',function (event) {
    document.querySelector('.product-slide').scrollLeft +=1100;
    event.preventDefault();

});

document.querySelector('.l-btn').addEventListener('click',function (event) {
    document.querySelector('.product-slide').scrollLeft -=1100;
    event.preventDefault();

});

document.querySelector('.btn-1b').addEventListener('click',function (event) {
    document.querySelector('.product-slide-1').scrollLeft +=1100;
    event.preventDefault();

});

document.querySelector('.btn-1a').addEventListener('click',function (event) {
    document.querySelector('.product-slide-1').scrollLeft -=1100;
    event.preventDefault();

});

document.querySelector('.btn-1c').addEventListener('click',function (event) {
    document.querySelector('.product-slide-2').scrollLeft +=1100;
    event.preventDefault();

});

document.querySelector('.btn-1d').addEventListener('click',function (event) {
    document.querySelector('.product-slide-2').scrollLeft -=1100;
    event.preventDefault();

});

const backtop = document.querySelector('.backtop');
backtop.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior : "smooth"
    });
});

const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.fa-xmark');
const black = document.querySelector('.black');
const sidebtn = document.querySelector('.second-1');

sidebtn.addEventListener('click',()=>{
    sidebar.classList.add('active');
    cross.classList.add('active');
    black.classList.add('active');
document.body.classList.add('stop-scroll')
})

cross.addEventListener('click',()=>{
    sidebar.classList.remove('active');
    cross.classList.remove('active');
    black.classList.remove('active');
})

const sign = document.querySelector('.ac');
const triangle = document.querySelector('.triangle');
const signin = document.querySelector('.hdn-sign');

sign.addEventListener('click',()=>{
    black.classList.toggle("active-1")
    signin.classList.toggle("active")
    triangle.classList.toggle("active")
})






   
