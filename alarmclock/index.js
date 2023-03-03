const clock = document.getElementById("clock");

let h="", m="", ap="";
setInterval(() => {
    var date = new Date();
    let hours = date.getHours();
    let ampm = String((hours>=12)?"PM":"AM");
    hours = hours%12;
    if(hours==="00"&&ampm=="PM")hours="12";
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(sec<10)sec = "0"+sec;
    if(min<10)min = String("0"+min);
    if(hours<10)hours = String("0"+hours);
    clock.innerHTML= hours+":"+min+":"+sec+" "+ampm;
    
    if(String(hours) === String(h) && String(min)===String(m) && ampm === ap){
        play();
    }}, 1000);
function play() {
    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}
document.getElementById("setAlarm").onclick = function(){
    h = String(document.querySelector("#hours").value);
    m = String(document.querySelector("#minute").value);
    ap = String(document.querySelector("#ampm").value);
    // console.log(h+" "+m+" "+ap);
    document.getElementById("alarm").innerHTML = "Alarm set to "+h+":"+m+" "+ap;
    document.getElementById("stopAlarm").removeAttribute("hidden");
};

document.getElementById("stopAlarm").onclick = function(){
    document.getElementById("stopAlarm").setAttribute("hidden", "hidden");
    document.getElementById("alarm").innerHTML = "";
    h=""; m ="";ap="";
};
