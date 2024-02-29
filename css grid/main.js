const num1Txt = document.getElementById("num1")
const num2Txt = document.getElementById("num2")
const modTxt = document.getElementById("mod")
const conTxt = document.getElementById("con")
const sumTxt = document.getElementById("sum")
let mod = 0
let con = 0
let sum = 0

function modulo() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        mod = parseInt(num1Txt.value) % parseInt(num2Txt.value)
        modTxt.innerHTML = mod
    }
}

function concatenates() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        con = parseInt(num1Txt.value) + "" + parseInt(num2Txt.value)
        conTxt.innerHTML = con
    }
}

function sum() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value)
        sumTxt.innerHTML = sum
    }
}

function clearEntries() {
    num1Txt.value = ""
    num2Txt.value = ""
    modTxt.value = ""
    modTxt.innerHTML = ""
    conTxt.innerHTML= ""
    sumTxt.innerHTML= ""
    con = 0
    sum = 0
    mod = 0
}