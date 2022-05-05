'use strict';

let userName = prompt("What is your name?");
document.write ("Hello " + userName + ", welcome to my page!");

let farm = prompt("Do I want a farm?")?.toLowerCase();
if (farm === "yes" || farm === "y") {
    alert("Correct!");
} else if (farm === "no" || famr === "n") {
    alert("FALSE!! I said it like 3 times...");
} else {
  alert("(Y)es or (N)o");
}

let favColor = promtp("Is my favorite color purple?")?.toLowerCase();
if (favColor === "yes" || favColor ==="y") {
    alert("Nope I fooled you!"); 
} else if (favColor === "no" || favColor === "n") {
    alert("My favorite color is Red!");
}

let cows = prompt("Do I want cows on my farm?")?.toLowerCase();
if (cows === "yes" || cows === "n") {
    alert("Of course!");
}else if(cows === "no" || cows === "n") {
    alert("Why wouldn't I want those cuties?");
}

let travel = prompt("Do I only want to stay in Seattle?")?.toLowerCase():
if (travel === "yes"|| travel === "y") {
    alert("That sounds miserable");
} else if (travel === "no" || travel === "n") {
    alert("I want to see the world through my own eyes!");
}

let cook = prompt("Can I cook");
switch (cook?.toLowercase()) {
    case "y":
    case "yes":
        alert("Yes, I love to cook");
        break;
    case "n":
    case "no":
        alert("Incorrect, I love to cook") ;
        break;   
}