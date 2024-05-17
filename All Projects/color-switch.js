let div=document.querySelector('.main-container')
let colorname = document.createElement('h1')
colorname.id = 'change'
let addtext = document.createTextNode('Color name')
colorname.appendChild(addtext)
div.appendChild(colorname)
colorname.style.textAlign='center';
colorname.style.paddingTop='1rem'
colorname.style.display='none';
colorname.style.fontSize ='3rem'

let colorcode = document.createElement('h2')
colorcode.id = 'code'
let newtext = document.createTextNode('Color code')
colorcode.appendChild(newtext)
div.appendChild(colorcode)
colorcode.style.textAlign='center';
colorcode.style.paddingTop='0.8rem'
colorcode.style.display='none';
colorcode.style.fontSize ='2rem'


const b1 = document.getElementById('box1');
b1.addEventListener('click',(e)=>{
    //Hitesh Sir ka tarika
    //  document.body.style.backgroundColor= '#D2691E';
    if (e.target.id==='box1') {
        document.body.style.backgroundColor= '#D2691E';
        colorname.style.display ='block'
        colorname.innerHTML="Chocolate"
        colorcode.style.display='block'
        colorcode.innerHTML="#D2691E"
    }
    //  colorname.style.display ='block'
    // colorname.innerHTML="Chocolate"
    // colorcode.style.display='block'
    // colorcode.innerHTML="#D2691E"
})
const b2 = document.getElementById('box2');
b2.addEventListener('click',()=>{
    //ballu ka tarika
     document.body.style.backgroundColor= '#FFFF00';
     colorname.style.display ='block'
     colorname.innerHTML="Yellow"
     colorcode.style.display='block'
    colorcode.innerHTML="#FFFF00"
})
const b3 = document.getElementById('box3');
b3.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#FF00FF';
     colorname.style.display ='block'
     colorname.innerHTML="Magenta"
     colorcode.style.display='block'
    colorcode.innerHTML="#FF00FF"
})
const b4 = document.getElementById('box4');
b4.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#ADFF2F';
     colorname.style.display ='block'
     colorname.innerHTML="Greenyellow"
     colorcode.style.display='block'
    colorcode.innerHTML="#ADFF2F"
})
const b5 = document.getElementById('box5');
b5.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#FF69B4';
     colorname.style.display ='block'
     colorname.innerHTML="Hotpink"
     colorcode.style.display='block'
    colorcode.innerHTML="#FF69B4"
})
const b6 = document.getElementById('box6');
b6.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#7FFFD4';
     colorname.style.display ='block'
     colorname.innerHTML="Aquamarine"
     colorcode.style.display='block'
    colorcode.innerHTML="#7FFFD4"
})
const b7 = document.getElementById('box7');
b7.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#40E0D0';
     colorname.style.display ='block'
     colorname.innerHTML="Turquoise"
     colorcode.style.display='block'
    colorcode.innerHTML="#40E0D0"
})
const b8 = document.getElementById('box8');
b8.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#4169E1';
     colorname.style.display ='block'
     colorname.innerHTML="Royalblue"
     colorcode.style.display='block'
    colorcode.innerHTML="#4169E1"
})
const b9 = document.getElementById('box9');
b9.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#00BFFF';
     colorname.style.display ='block'
     colorname.innerHTML="Deepskyblue"
     colorcode.style.display='block'
    colorcode.innerHTML="#00BFFF"
})
const b10 = document.getElementById('box10');
b10.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#E6E6FA';
     colorname.style.display ='block'
     colorname.innerHTML="Lavender"
     colorcode.style.display='block'
    colorcode.innerHTML="#E6E6FA"
})
const b11 = document.getElementById('box11');
b11.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#800080';
     colorname.style.display ='block'
     colorname.innerHTML="Purple"
     colorcode.style.display='block'
    colorcode.innerHTML="#800080"
})
const b12 = document.getElementById('box12');
b12.addEventListener('click',()=>{
     document.body.style.backgroundColor= '#8A2BE2';
     colorname.style.display ='block'
     colorname.innerHTML="Blueviolet"
     colorcode.style.display='block'
    colorcode.innerHTML="#8A2BE2"
})