const input = document.getElementById('my-input')
const btn = document.getElementById('my-btn')
const img = document.querySelector('.my-img')
const link = document.querySelector('.myLink')
const img2 = document.querySelector('.mySecondImg')
const item = document.querySelector('#myList li')


input.addEventListener('input', ()=>{
      btn.textContent = input.value;
    });

img.src = 'https://organicmandya.com/cdn/shop/files/Pineapple.jpg?v=1721375225'

link.href = 'https://www.google.com/'

img2.setAttribute('alt', 'red apple');

item.textContent = 'soup    '



