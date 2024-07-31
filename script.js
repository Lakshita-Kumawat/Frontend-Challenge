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
