let button1 = document.querySelector('#btn1');
let button2= document.querySelector('#btn2');
let mainContainer = document.querySelector('.maincontainer');
// let ele=document.querySelector('#copytext');


let color1="";
let color2="";


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
    mainContainer.style.background=`linear-gradient(to right top,${color1}, ${color2})`;
};

function randomGradient2(){
    color2=hexaValue();    
    button2.textContent=color2;
    button2.style.background=color2;
    mainContainer.style.background=`linear-gradient(to right top,${color1}, ${color2})`;
};


button1.addEventListener('click',randomGradient1);
button2.addEventListener('click',randomGradient2);

// ele.textContent=`linear-gradient(to right top,${color1}, ${color2})`;
// console.log(color1);
