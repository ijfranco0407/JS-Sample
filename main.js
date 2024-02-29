const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const diffTxt = document.getElementById("diff");
const prodTxt = document.getElementById("prod");
const qoutTxt = document.getElementById("qout");
const modTxt = document.getElementById("mod");
let sum = 0;
let diff = 0;
let prod = 0;
let qout = 0;
let mod = 0;


function calculate() {
    if(num1Txt.value == "" || num2Txt.value == "") {
    alert("Fill Out The Missing Contents")
} else {
    sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
    sumTxt.innerHTML = sum
    diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
    diffTxt.innerHTML = diff
    prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
    prodTxt.innerHTML = prod
    qout = parseInt(num1Txt.value) / parseInt(num2Txt.value);
    qoutTxt.innerHTML = qout
    mod = parseInt(num1Txt.value) % parseInt(num2Txt.value);
    modTxt.innerHTML = mod
}
}

function clearEntries(){
    num1Txt.value = ""
    num2Txt.value = ""
    sumTxt.innerHTML = ""
    diffTxt.innerHTML = ""
    prodTxt.innerHTML = ""
    qoutTxt.innerHTML = ""
    modTxt.innerHTML = ""
    sum=0
    diff=0
    prod=0
    qout=0
    mod=0
}