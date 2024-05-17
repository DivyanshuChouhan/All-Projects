let clock = document.getElementById('samay')
clock.style.fontSize="3.5rem";
let day = document.getElementById('din')
day.style.fontSize="3.5rem";
setInterval(()=>{
    let date = new Date;
    clock.innerHTML=date.toLocaleTimeString()
    day.innerHTML=date.toLocaleDateString()
}),1000;