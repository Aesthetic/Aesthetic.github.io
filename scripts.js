const oops =
	"Sorry if you are seeing this, I'm working on the site at the moment :)\n-Will";

const cursor = document.getElementById('cursor');
const element = document.getElementById('sentence');
var direction = 1;
var sentence = oops;
var cursorPos = 0;
var blinking = true;
var delay = 0;
var atStart = true;


function toggleTyping() {
	blinking = !blinking;
	if (blinking) {
		cursor.classList.add('blink');
	} else {
		cursor.classList.remove('blink');
	}
}

window.setInterval(function() {
	if (cursorPos < 100 && delay > 50) {
		if (atStart) {
			toggleTyping();
			atStart = false;
		}
		cursorPos += direction;
		element.innerText = sentence.slice(0, cursorPos);
	} else {
		if (delay < 51) {
			delay += 1;
		}
		if (cursorPos == 100) {
			toggleTyping();
			cursorPos++;
		}

	}
}, 90);

document.getElementById('D3Cube').onclick = function changeContent() {

	document.getElementById('side1').style.backgroundColor = getRandomColor();
	document.getElementById('side2').style.backgroundColor = getRandomColor();
	document.getElementById('side3').style.backgroundColor = getRandomColor();
	document.getElementById('side4').style.backgroundColor = getRandomColor();
	document.getElementById('side5').style.backgroundColor = getRandomColor();
	document.getElementById('side6').style.backgroundColor = getRandomColor();

};

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

document.getElementById('side1').style.backgroundColor = getRandomColor();
document.getElementById('side2').style.backgroundColor = getRandomColor();
document.getElementById('side3').style.backgroundColor = getRandomColor();
document.getElementById('side4').style.backgroundColor = getRandomColor();
document.getElementById('side5').style.backgroundColor = getRandomColor();
document.getElementById('side6').style.backgroundColor = getRandomColor();


document.getElementById('inner').addEventListener("animationiteration", function() {
	document.getElementById('side1').style.backgroundColor = getRandomColor();
	document.getElementById('side2').style.backgroundColor = getRandomColor();
	document.getElementById('side3').style.backgroundColor = getRandomColor();
	document.getElementById('side4').style.backgroundColor = getRandomColor();
	document.getElementById('side5').style.backgroundColor = getRandomColor();
	document.getElementById('side6').style.backgroundColor = getRandomColor();
});

document.getElementById('outer').addEventListener("animationiteration", function() {
	document.getElementById('side1').style.backgroundColor = getRandomColor();
	document.getElementById('side2').style.backgroundColor = getRandomColor();
	document.getElementById('side3').style.backgroundColor = getRandomColor();
	document.getElementById('side4').style.backgroundColor = getRandomColor();
	document.getElementById('side5').style.backgroundColor = getRandomColor();
	document.getElementById('side6').style.backgroundColor = getRandomColor();
});