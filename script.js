const headerH1 = document.querySelector('header h1');
const headerP = document.querySelector('header p');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    console.log(value);
    headerH1.style.right = value * 0.5+'px';
    headerP.style.left = value * 0.5+'px';
})

const div = document.createElement('div');
div.innerHTML=`<img src="images/cricketer2.png" alt="trophy" loading="eager">
<img src="images/cricketer3.png" alt="trophy" loading="eager">
<img src="images/cricketer4.png" alt="trophy" loading="eager">`

document.querySelector('header').append(div);