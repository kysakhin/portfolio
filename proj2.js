document.addEventListener("DOMContentLoaded", function() {
let project = document.querySelectorAll('.transp');

let imageIndex = 0;

function changeImg() {
	project[imageIndex].classList.remove('showing');
	imageIndex = (imageIndex + 1) % project.length;
	project[imageIndex].classList.add('showing');
}

    project[imageIndex].classList.add('showing');


setInterval(changeImg, 3000); });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollpos = window.pageYOffset;
	if(prevScrollpos > currentScrollpos) {
		document.getElementById("top").style.top = "0";
	} else {
		document.getElementById("top").style.top = "-50px";
	}
	prevScrollpos = currentScrollpos;
}

function menu(x) {
	x.classList.toggle("change");
	document.getElementById("menu").classList.toggle("show");
}
