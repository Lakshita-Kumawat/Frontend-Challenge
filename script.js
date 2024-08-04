const div = document.createElement('div');
div.setAttribute('id','image-display');
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

const joinForm = document.createElement('div');
joinForm.innerHTML = `
<form class="form">
<p>
    <label for="uname">Player Name</label>
    <input type="text" name="uname" id="uname" placeholder="Enter Your Name" required>
</p>
<p>
    <label for="uemail">Email Id</label>
    <input type="email" name="uemail" id="uemail" placeholder="Enter Your Email" required>
</p>
<p>
    <label for="unumber">Phone No.</label>
    <input type="number" name="unumber" id="unumber" placeholder="Enter Your Phone no." required>
</p>
<button class="btn">Submit</button>
</form>
`;
document.getElementById('join').append(joinForm);

const thanksConfig = document.createElement('div');
thanksConfig.setAttribute('id','thanks-config');
thanksConfig.innerHTML=`
<div id="thanks-card">
    <h3>Submission Successful</h3>
    <p>Thank you for joining. Now you are a part of us. We are exicted to work with you. You will get more information on your gmail account</p>
    <button class="btn">Close</button>
</div>
`;
document.querySelector('body').append(thanksConfig);

const joinBtn = document.querySelector('#join button');

function submitionComplete(event){
    event.preventDefault();
    thanksConfig.style.display="flex";
}

const closeBtn = document.querySelector('#thanks-card button');
function closeConfig(event){
    event.preventDefault();
    thanksConfig.style.display="none";
}

closeBtn.addEventListener('click', closeConfig);
joinBtn.addEventListener('click', submitionComplete);

gsap.registerPlugin(ScrollTrigger);

gsap.from("header h1, header p",{
    y:50,
    duration:1,
});

gsap.to("header img",{
    y:20,
    duration:1,
    opacity:1
})

let tl = gsap.timeline({scrollTrigger:{
    trigger:'#about h2, #about p',
    start:'top 80%',
    end:'+=1200',
    toggleAction:'play pause resume restart',
    scrub:3,
}});

tl.from('#about h2, #about p, #about img',{
    x:50,
    duration:2,
})

tl.from('#join h2, #join p',{
    y:20,
    duration:2,
})

tl.from('#fee h2, #fee p',{
    y:20,
    duration:2,
})

tl.from('#location h2, #location p, #location img',{
    x:-50,
    duration:3,
})

tl.from('#schedule ul',{
    x:50,
    duration:2,
})
