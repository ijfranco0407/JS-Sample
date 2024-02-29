const num1Txt = document.getElementById("num1")
const num2Txt = document.getElementById("num2")
const modTxt = document.getElementById("mod")
const conTxt = document.getElementById("con")
const sumTxt = document.getElementById("sum")
const diffTxt = document.getElementById("diff")
const prodTxt = document.getElementById("prod")
const qoutTxt = document.getElementById("qout")
let qout = 0
let mod = 0
let con = 0
let sum = 0
let diff = 0
let prod = 0

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
        conTxt.innerHTML = num1Txt.value + " " + num2Txt.value
    }
}

function Sum() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value)
        sumTxt.innerHTML = sum
    }
}
function difference() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value)
        diffTxt.innerHTML = diff
    }
}
function product() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value)
        prodTxt.innerHTML = prod
    }
}
function qoutient() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("Fill-out the Missing Context")
    } else {
        qout = parseInt(num1Txt.value) / parseInt(num2Txt.value)
        qoutTxt.innerHTML = qout
    }
}

function clearEntries() {
    num1Txt.value = ""
    num2Txt.value = ""
    modTxt.value = ""
    modTxt.innerHTML = ""
    conTxt.innerHTML= ""
    sumTxt.innerHTML= ""
    diffTxt.innerHTML= ""
    prodTxt.innerHTML= ""
    qoutTxt.innerHTML= ""
    qout
    prod = 0
    diff = 0
    con = 0
    sum = 0
    mod = 0
}