let spinner = document.getElementById("spinner")
let btn = document.getElementById("btn");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	spinner.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}