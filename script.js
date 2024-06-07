function putNum(value) {
    var divElement = document.getElementById("textarea");
    divElement.innerText += value;
    divElement.style.fontSize = 35 + "px";
}

function outputAnswer() {
    try {
        var divElement = document.getElementById("textarea");
        document.getElementById("textarea").innerHTML = eval(document.getElementById("textarea").textContent);
    } catch (error) {
        divElement.style.fontSize = 25 + "px";
        document.getElementById("textarea").innerHTML = "Invalid Format Used";
    }
    return 1;
}

function backSpace(i) {
    if (i === 0) {
        let divElement = document.getElementById("textarea");
        let str = divElement.textContent;
        let newVal = str.slice(0, -1);
        document.getElementById("textarea").innerHTML = newVal;
    } else {
        document.getElementById("textarea").innerHTML = "";
    }
    return 0;
}

let i = 0;
