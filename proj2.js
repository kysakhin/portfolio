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
