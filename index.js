// var myName = window.prompt("What's your name");

// console.log("hello", myName)

document.getElementById("myButton").onclick = function(){
    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);
}