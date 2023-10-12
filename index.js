let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");
let hResult= 0;
let gResult = 0;

function add1home() {
    hResult +=1
    homeResult.textContent = hResult; 

}

function add2home() {
    hResult +=2
    homeResult.textContent = hResult
}

function add3home() {
    hResult += 3
    homeResult.textContent = hResult
}

function add1guest() {
    gResult +=1
    guestResult.textContent = gResult; 

}

function add2guest() {
    gResult +=2
    guestResult.textContent = gResult
}

function add3guest() {
    gResult += 3
    guestResult.textContent = gResult
}

