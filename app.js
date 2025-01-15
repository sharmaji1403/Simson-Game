let gameSeq = [];
let userSeq = [];
let btns = ["yellow" , "red" , "purple" , "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game is started");
    started = true;

    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
      btn.classList.remove("flash")  
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
      btn.classList.remove("userFlash")  
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log("Curr level" , level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
        // console.log("same Value");
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any Key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "green", "red", "purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("Game started");
//         started = true;
//         levelUp();
//     }
// });

// function btnFlash(btn) {
    
//         btn.classList.add("flash");
//         setTimeout(function () {
//             btn.classList.remove("flash");
//         }, 1000);
    
// }

// function levelUp() {
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * btns.length); // Ensure all buttons are included
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);

//     console.log(randBtn);
//     console.log(randIdx);
//     console.log(randColor);

//     btnFlash(randBtn);

// }
