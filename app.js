function clock(){
    let hour = document.getElementById('hours');
    let minut = document.getElementById('minuts');
    let second = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM";

    hour.innerHTML	= h;
    minut.innerHTML = m;
    second.innerHTML = s;
    
}

var interval = setInterval(clock,1000);