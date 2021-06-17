// var myName = window.prompt("What's your name: ");

// console.log("Hello", myName);

document.getElementById("myButton").onclick = function() {

    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);

}