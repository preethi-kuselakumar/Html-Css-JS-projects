let ampm = document.getElementById("ampm");
function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours();
    let min = padzero(dateTime.getMinutes());
    let sec = padzero(dateTime.getSeconds());
    if(hr>12){
        hr = hr-12 ;
        ampm.innerHTML="PM"
    }

    document.getElementById("hours").innerHTML= padzero(hr)
    document.getElementById("mins").innerHTML = min
    document.getElementById("seconds").innerHTML = sec
}

function padzero(num){
    return num<10? "0"+num : num
}

setInterval(displayTime,1000)