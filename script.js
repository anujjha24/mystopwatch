// displaying current date on marquee
let currentdate= new Date();
// Getting date month and year from date property
let day=currentdate.getDate();
let month=currentdate.getMonth()+1;
let year=currentdate.getFullYear();

//Formating of the final date
let formatteddate= day+'/'+month+'/'+year;
document.getElementById('date').innerHTML=formatteddate;

// Stopwach making starts from here
let strtbtn=document.getElementById('start');
let resetbtn=document.getElementById('reset');
let stopbtn=document.getElementById('stop');

let hour=0;
let minute=0;
let second=0;
let count=0;

strtbtn.addEventListener('click',function(){
    timer=true;
    stopwatch();
    // console.log('working')

});

stopbtn.addEventListener('click',function(){
    timer=false;
    // console.log('working')
}
);
resetbtn.addEventListener('click',function(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('milisecond').innerHTML="00";
    // console.log('working')
});
function stopwatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milisecond').innerHTML = countString;
        setTimeout(stopwatch, 10);
    }
}
