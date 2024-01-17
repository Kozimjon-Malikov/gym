// first head 
const navigator__1=document.querySelector('.navigator__1'),
company__details=document.querySelector('.company__details'),
contact__top=document.querySelector('.contact__top'),
innerParentNavLinks=document.querySelector('.inner__sub__menu'),
innerNavlinks=document.querySelectorAll('.inner__sub__menu > ul > li');
navigator__1.addEventListener('click',()=>{
    company__details.classList.toggle('active__nav');
    contact__top.classList.toggle('active__nav');
    navigator__1.classList.toggle('active__bar')
})      
innerNavlinks.forEach(item=>{
    item.addEventListener('click',()=>{
        innerParentNavLinks.classList.toggle('active__inner__nav')
    })
})