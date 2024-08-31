const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("Minutes");
const secondE1=document.getElementById("Seconds");
const AmPmE1=document.getElementById("AmPm");

function updateClock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM" ;
    
    if(h > 12){
        h = h - 12;
        AmPm = "PM" ;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


        
        
    hourE1.innerText = h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    AmPmE1.innerText=AmPm;
    setTimeout(()=>{
      updateClock();

    },1000)


}
updateClock();




