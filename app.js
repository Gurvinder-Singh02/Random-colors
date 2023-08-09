
function random(){
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    return {r , g , b};
}

box1 = document.querySelector(".box1");
box2 = document.querySelector(".box2");
btn = document.querySelector("button");


btn.addEventListener("click",()=>{
    rgb = random();
    console.log("clicked",rgb)
    rgb_1 = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    rgb_2 = `rgb(${255-rgb.r},${255-rgb.g},${255-rgb.b})`;
    box1.style.backgroundColor = rgb_1;
    box2.style.backgroundColor = rgb_2;

    box1.innerText = rgb_1;
    box2.innerText = rgb_2;
    
})  


