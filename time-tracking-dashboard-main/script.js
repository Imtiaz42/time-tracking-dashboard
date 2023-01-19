let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let workTiming = document.getElementById("work-timing");
let workLast = document.getElementById("work-last");

let playTiming = document.getElementById("play-timing");
let playLast = document.getElementById("play-last");

let studyLast = document.getElementById("study-last");
let studyTiming = document.getElementById("study-timing");

let exerciseTiming = document.getElementById("exercise-timing");
let exerciseLast = document.getElementById("exercise-last");

let socialTiming = document.getElementById("social-timing");
let socialLast = document.getElementById("social-last");

let careTiming = document.getElementById("care-timing");
let careLast = document.getElementById("care-last");




daily.addEventListener("click", () => {
    
    workTiming.innerHTML = "5hrs"
    workLast.innerHTML = "Last Week - 7hrs"

    playTiming.innerHTML = "1hrs"
    playLast.innerHTML = "Last Week - 2hrs"

    studyTiming.innerHTML = "0hrs"
    studyLast.innerHTML = "Last Week - 1hrs"

    exerciseTiming.innerHTML = "1hrs"
    exerciseLast.innerHTML = "Last Week - 1hrs"

    socialTiming.innerHTML = "1hrs"
    socialLast.innerHTML = "Last Week - 3hrs"

    careTiming.innerHTML = "0hrs"
    careLast.innerHTML = "Last Week - 1hrs"
})


weekly.addEventListener("click", () => {
    
    workTiming.innerHTML = "32hrs"
    workLast.innerHTML = "Last Week - 36hrs"

    playTiming.innerHTML = "10hrs"
    playLast.innerHTML = "Last Week - 8hrs"

    studyTiming.innerHTML = "4hrs"
    studyLast.innerHTML = "Last Week - 7hrs"

    exerciseTiming.innerHTML = "4hrs"
    exerciseLast.innerHTML = "Last Week - 5hrs"

    socialTiming.innerHTML = "5hrs"
    socialLast.innerHTML = "Last Week - 10hrs"

    careTiming.innerHTML = "2hrs"
    careLast.innerHTML = "Last Week - 2hrs"
})



monthly.addEventListener("click", () => {
    
    workTiming.innerHTML = "103hrs"
    workLast.innerHTML = "Last Week - 128hrs"

    playTiming.innerHTML = "23hrs"
    playLast.innerHTML = "Last Week - 29hrs"

    studyTiming.innerHTML = "13hrs"
    studyLast.innerHTML = "Last Week - 19hrs"

    exerciseTiming.innerHTML = "11hrs"
    exerciseLast.innerHTML = "Last Week - 18hrs"

    socialTiming.innerHTML = "21hrs"
    socialLast.innerHTML = "Last Week - 23hrs"

    careTiming.innerHTML = "7hrs"
    careLast.innerHTML = "Last Week - 11hrs"
})