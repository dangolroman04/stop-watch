let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let millisecond = document.querySelector(".millisecond");
let timerBtns = document.querySelector(".timer-btns");

timerBtns.addEventListener("click", (e) => {
    
    const btn = e.target.closest("button");
    if (!btn) return;

    timerBtns.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active"); 
    });

    btn.classList.toggle("active");
    
    
    
    if (e.target.classList.contains("start")) {
        startTimer();
        
    }  else if (e.target.classList.contains("stop")) {
        stopTimer(); 
    }  else{
        resetTimer();
        
    }

});
let interval;
let isRunning = false;
let ms = 0, s = 0, h = 0, m = 0;
const startTimer = () => {
    console.log("success")
    
    if (isRunning) return;
    isRunning = true;
   
    millisecond.style.display = "inline-block";
    
    
    interval = setInterval(() => {
        ms += 10;
        if (ms >= 1000) {
            ms = 0;
            s++;
        } 
        if (s >= 60) {
            s = 0;
            m++;
        }
        if (m >= 60) {
            m = 0;
            h++;
        } 
        updateTimer();
    }, 10);
}


const stopTimer = () => {
    clearInterval(interval);
    isRunning = false;
}

const resetTimer = () => {
    clearInterval(interval);
    h = m = s = ms = 0;
    updateTimer();
    isRunning = false;
}

const updateTimer = () => {
    hour.textContent = String(h).padStart(2, "0");
    minute.textContent = String(m).padStart(2, "0");
    second.textContent = String(s).padStart(2, "0");
    millisecond.textContent = String(Math.floor(ms/10)).padStart(2, "0");
}
