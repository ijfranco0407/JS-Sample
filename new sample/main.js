const inputTxt = document.getElementById("num2")
const num1Txt = document.getElementById("num1")
const aveTxt = document.getElementById("average")
const sumTxt = document.getElementById("sum")
const resTxt = document.getElementById("result")
let arr = []
let average = 0
let sum = 0
let result = 0


function insertNumber() {
    if(inputTxt.value == ""){
        alert("Fill-out missing contents")
    } else {
        arr.push(parseFloat(inputTxt.value));
        inputTxt.value = ""
        num1Txt.innerHTML = arr.join("<br>");
    }

    sum = 0
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
        sumTxt.innerHTML = sum;
    } 
    average = sum / arr.length
    aveTxt.innerHTML = average;
 
    if(average >= 75){
        resTxt.innerHTML = "Passed"
   } else {
        resTxt.innerHTML = "Failed"
    }   
    
}

function clearEntries() {
    inputTxt.value = "";
    num1Txt.innerHTML = "";
    sumTxt.innerHTML = "";
    aveTxt.innerHTML = "";
    resTxt.innerHTML = "";
    average = 0
    result = 0;
    arr = [];
    num2 = 0
    num1 = 0
    sum=0
}