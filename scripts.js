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