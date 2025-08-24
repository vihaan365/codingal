const e1 = document.getElementsByClassName("title");
e1[0].style.backgroundColor = "red";
console.log(e1);

const e2s = document.getElementsByTagName("span");
e2s[2].style.backgroundColor = "green";

const e3s = document.getElementById("subtitle");
console.log(e3s);

const e4s = document.querySelector(".title");
console.log(e4s);

const e5s = document.querySelectorAll("span");
console.log(e5s);