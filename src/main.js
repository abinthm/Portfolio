import '../styles/style.css';


const hbtn = document.querySelector('#hbtn');
const mnav = document.querySelector('#mobnav');

const aabtn=document.querySelector('#abbtn');
const hhbtn=document.querySelector('#hbbtn');
const ccbtn=document.querySelector('#cbbtn');
aabtn.addEventListener('click',() =>{
    document.body.style.overflow = 'auto';
    mnav.classList.toggle('hidden');
});
hhbtn.addEventListener('click',() =>{
    document.body.style.overflow = 'auto';
    mnav.classList.toggle('hidden');
});
ccbtn.addEventListener('click',() =>{
    document.body.style.overflow = 'auto';
    mnav.classList.toggle('hidden');
});

hbtn.addEventListener('click', () => {
    
    mnav.classList.toggle('hidden');
    document.body.style.overflow = mnav.classList.contains('hidden') ? '' : 'hidden';
});

