const phrases = [
  "Sorry if you are seeing this, I'm working on the site at the moment :)\n-Will"
];

const element = document.getElementById('sentence');
const cursor = document.getElementById('cursor');
let direction = -1;
let phraseIdx = 0;
let sentence = phrases[phraseIdx];
let cursorPos = 0;
let blinking = true;
let blinkIntervals = 0;
let delay = 0;
let atStart = true;

const switchDirection = () => {
  direction *= -1;
  toggleTyping();
  if (direction === 1) {
    /* Just started typing again, time to switch phrase */
    phraseIdx++;
    if (phraseIdx >= phrases.length) {phraseIdx = 0;}
    sentence = phrases[phraseIdx];
  }
};

const toggleTyping = () => {
  blinking = !blinking;
  if (blinking) {cursor.classList.add('blink')} else {cursor.classList.remove('blink');}
}

window.setInterval(() => {
  const atEnd = cursorPos === sentence.length;

  if (cursorPos < 100 && delay > 50) {
    if (atStart) {
      switchDirection();
      atStart = false;
    }
    cursorPos += direction;
    element.innerText = sentence.slice(0, cursorPos);
  } else {
    if(delay < 51){
      delay += 1;
    }
    if(cursorPos == 100){
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

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}