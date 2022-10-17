let mainDiv = document.querySelector('.main-img')
let mainImg = document.querySelector('.main-img img');

let themes = document.querySelectorAll('.theme img');
console.log(themes);

const imgScale = [
    { transform: ' scale(0.5)' },
    { transform: 'scale(1)' }
  ];


  const imgTiming = {
    duration: 500,
    iterations: 1,
  }


themes.forEach(img => {
    img.addEventListener('click', ()=>{
        mainImg.src = img.src;

        mainDiv.animate(imgScale,imgTiming);
       
    })
})
