


const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('mouseover', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.add('visible');
    }
})

closeBtn.addEventListener('mouseover', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.remove('visible');
    }
})


let btn1 =document.querySelector("#btn1");
let btn2 =document.querySelector("#btn2");
let btn3 =document.querySelector("#btn3");


let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");


arrow1.addEventListener('click', function () {
    btn1.click();
})

arrow2.addEventListener('click', function () {
    btn2.click();
})

arrow3.addEventListener('click', function () {
    btn3.click();
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});