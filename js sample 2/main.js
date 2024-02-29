const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const num3Txt = document.getElementById("num3");
const fullTxt = document.getElementById("fullTxt");

function concatenate(){
    if(num1Txt.value == "" || num2Txt.value == "" || num3Txt.value == ""){
        alert("Fill out the Missing Contents");
    } else {
        fullTxt.innerHTML= num1Txt.value + " " + num2Txt.value + " " + num3Txt.value;
    }
}

function clearEntries() {
    num1Txt.value = ""
    num2Txt.value = ""
    num3Txt.value = ""
    fullTxt.innerHTML = ""
}