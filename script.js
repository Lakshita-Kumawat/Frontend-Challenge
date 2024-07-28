const div = document.createElement('div');
div.innerHTML=`<img src="images/cricketer2.png" alt="trophy" loading="eager">
<img src="images/cricketer3.png" alt="trophy" loading="eager">
<img src="images/cricketer4.png" alt="trophy" loading="eager">`

document.querySelector('header').append(div);

const div2 = document.createElement('div');
div2.setAttribute('id','snow');

div2.innerHTML = `<span style="--i:1"></span>
<span style="--i:2;"></span>
<span style="--i:4;"></span>
<span style="--i:1;"></span>
<span style="--i:3;"></span>
<span style="--i:2;"></span>`;

document.querySelector('body').prepend(div2);
