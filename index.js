// const good=document.getElementById('good')
// const fast=document.getElementById('fast')
// const cheap=document.getElementById('cheap')
// function changed() {
//     const isGood = good.checked;
//     const isFast = fast.checked;
//     const isCheap = cheap.checked;
//     if (isGood && isFast && isCheap && el == cheap) {
//         fast.checked = false;
//     }
//     if (isGood && isCheap && isFast && el == fast) {
//         good.checked = false;
//     }
//     if (isCheap && isFast && isGood && el == good) {
//         cheap.checked = false;
//     }
//
// }
function swichGood() {
    var isGood = document.getElementById("good").checked;
    var isCheap = document.getElementById("cheap").checked;
    var isFast = document.getElementById("fast").checked;
    if (isCheap && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("cheap").checked = false;
        } else {
            document.getElementById("fast").checked = false;
        }
    }
}
function swichCheap() {
    var isGood = document.getElementById("good").checked;
    var isCheap = document.getElementById("cheap").checked;
    var isFast = document.getElementById("fast").checked;
    if (isGood && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("good").checked = false
        } else {
            document.getElementById("fast").checked = false
        }
    }
}
function swichFast() {
    var isGood = document.getElementById("good").checked;
    var isCheap = document.getElementById("cheap").checked;
    var isFast = document.getElementById("fast").checked;
    if (isGood && isCheap) {
        if (Math.random() < 0.5) {
            document.getElementById("cheap").checked = false
        } else {
            document.getElementById("fast").checked = false
        }
    }
}
