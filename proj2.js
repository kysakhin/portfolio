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

var prevScrollpos = window.scrollY;
window.onscroll = function() {
	var currentScrollpos = window.scrollY;
	if(prevScrollpos > currentScrollpos) {
		document.getElementById("top").style.top = "0";
	} else {
		document.getElementById("top").style.top = "-50px";
	}
	prevScrollpos = currentScrollpos;
}

function icon(x) {
	x.classList.toggle("change");
	var mele = document.getElementById("menu");
	mele.classList.toggle("show");

}

document.addEventListener('DOMContentLoaded', function () {
    var scroll = new SmoothScroll('.smooth-scroll', {
        speed: 800,
        speedAsDuration: true
    });
});

<<<<<<< HEAD
=======


$(".Para").hover(
  function () {
    $(this).find('.dropdowns').stop(true, true).slideDown(300);
  },
  function () {
    $(this).find('.dropdowns').stop(true, true).slideUp(300);
  }
)

>>>>>>> c416adc (some changes)
