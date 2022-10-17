let mainImg = document.querySelector('.main-img img');

let themes = document.querySelectorAll('.theme img');
console.log(themes);

themes.forEach(img => {
    img.addEventListener('click', ()=>{
        mainImg.src = img.src;
    })
})
