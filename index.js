let button1 = document.querySelector('#btn1');
let button2= document.querySelector('#btn2');
let mainContainer = document.querySelector('.maincontainer');
let ele=document.querySelector('#copytext');

let color1="#63e65f";
let color2="#00b3ff";


function hexaValue(){
    let code="#";
    let hexCodeNum="0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        let num=Math.floor(Math.random()*16);
        code=code+hexCodeNum[num];
    }
    return code;
};

function randomGradient1(){
    color1=hexaValue();
    button1.textContent=color1;
    button1.style.background=color1;
    mainContainer.style.backgroundImage=`linear-gradient(to right top,${color1}, ${color2})`;
    ele.textContent=`background-color:linear-gradient(to right top,${color1}, ${color2});`;
};

function randomGradient2(){
    color2=hexaValue();    
    button2.textContent=color2;
    button2.style.background=color2;
    mainContainer.style.backgroundImage=`linear-gradient(to right top,${color1}, ${color2})`;
    ele.textContent=`background-color:linear-gradient(to right top,${color1}, ${color2});`;
};
console.log(color1);
console.log(color2);



button1.addEventListener('click',randomGradient1);
button2.addEventListener('click',randomGradient2);
