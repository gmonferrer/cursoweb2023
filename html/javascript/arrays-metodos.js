const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("frutas").innerHTML = fruits.toString();

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("pop").innerHTML = "sin pop " + fruits1;
fruits1.pop();

document.getElementById("pop1").innerHTML = "con pop " + fruits1;