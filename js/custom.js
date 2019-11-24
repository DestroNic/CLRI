// age dropdown function

window.onload = function () {
    var ddl = document.getElementById('agecontainer').getElementsByTagName("select")[0];
    for (var i = 1; i <= 100; i++) {
        var theOption = new Option;
        theOption.text = i;
        theOption.value = i;
        ddl.options[i] = theOption;
    }
};

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';
}

var numbers = []
for (var i = 1; i <= 3; i++) {
    numbers.push(i)
}
var numString = i.toString

function yesnoCheck1() {
    if (document.getElementById("yesCheck1").checked) {
        document.getElementById(1).style.visibility = 'visible';
    }
    else document.getElementById(1).style.visibility = 'hidden';
}

function yesnoCheck2() {
    if (document.getElementById("yesCheck2").checked) {
        document.getElementById(2).style.visibility = 'visible';
    }
    else document.getElementById(2).style.visibility = 'hidden';
}

function yesnoCheck3() {
    if (document.getElementById("yesCheck3").checked) {
        document.getElementById(3).style.visibility = 'visible';
    }
    else document.getElementById(3).style.visibility = 'hidden';
}