const bars = document.querySelector(".bars"),
xmark = document.querySelector(".xmark"),
navLinks = document.querySelector(".navLinks"),
header = document.querySelector("header"),
iconArrow = document.querySelector(".iconArrow"),
icon = document.querySelector(".icon");


window.addEventListener("scroll",()=>{
    document.documentElement.scrollTop > 0 ? header.classList.add("scrolled") : header.classList.remove("scrolled");
    showInScrolling();
})

const showInScrolling =()=>{
    const show = document.documentElement.scrollTop > 150
    iconArrow.style.cssText = icon.style.cssText = show ?  `opacity:1;visibility:visible;` :  `opacity:0;visibility:hidden;`;
}


const toggleMenu = ()=>{
    navLinks.classList.toggle("active");
    const isActive = navLinks.classList.contains("active");
     xmark.style.display = isActive ? "flex" : "none";
     bars.style.display = isActive ? "none" : "flex";
}

bars.addEventListener("click", toggleMenu);
xmark.addEventListener("click", toggleMenu);


let descriptionHomePage = document.querySelector(".descriptionHomePage"),
val = document.querySelector(".val");

let count = 0;
const arr = ['تمويل المشاريع','قروض شخصية','تمويل الأسرة','تمويل الزواج','تمويل الترميم','و الكثير'];

const textAnimation = ()=>{
    if(count >= arr.length){
       count = 0;
    }
    val.innerHTML = '';

    for(i = 0; i < arr[count].length; i++ ){
        let span = document.createElement("span");
        span.innerHTML = arr[count][i];
        val.appendChild(span);
            if(span.innerHTML == ' '){
                span.innerHTML = '&nbsp';

            }

        span.classList.add('txt');
        span.classList.add('txtAnim');
        span.style.animationDelay = i / 10 + "s";
    }
    count++;
}

textAnimation();
setInterval(textAnimation,4000 )


