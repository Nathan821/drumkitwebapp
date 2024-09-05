// Define sound files associated with each key
const sounds = {
  74: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav', // Snare
  66: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav', // Kick
  86: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav', // Kick
  72: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav', // High Tom
  71: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav', // Mid Tom
  70: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav', // Low Tom
  69: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav', // Crash
  82: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav', // Ride
  73: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav', // Hi-Hat Open
  75: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav' // Hi-Hat Closed
};

// Function to play sound and animate the respective element
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return; // Stop if no sound is found

  audio.currentTime = 0; // Rewind to start for quick replays
  audio.play();
  key.classList.add('playing');

  // Trigger specific animations based on the key pressed
  switch (keyCode) {
    case 69: // Crash
      animateElement('.crash-cymbal', 'rotate(-30deg) scale(1.2)', 0.1);
      break;
    case 82: // Ride
      animateElement('.ride-cymbal', 'rotate(15deg) scale(1.2)', 0.1);
      break;
    case 73: // Hi-Hat Open
      animateElement('.hihat-top-cymbal', 'translateY(-10px)', 0.1);
      break;
    case 75: // Hi-Hat Closed
      animateElement('.hihat-top-cymbal', 'translateY(5px)', 0.1);
      break;
    case 74: // Snare
      animateElement('.snare', 'scale(1.1)', 0.05);
      break;
    case 66: // Kick
      animateElement('.kick', 'scale(1.1)', 0.05);
      break;
    case 86: // Kick 2
      animateElement('.kick2', 'scale(1.1)', 0.05);
      break;
    case 70: // Low Tom
      animateElement('.tom-low', 'rotate(-5deg)', 0.1);
      break;
    case 71: // Mid Tom
      animateElement('.tom-mid', 'rotate(-3deg)', 0.1);
      break;
    case 72: // High Tom
      animateElement('.tom-high', 'rotate(3deg)', 0.1);
      break;
    default:
      break;
  }
}

// Function to handle animations on elements
function animateElement(selector, transform, duration) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.transition = `transform ${duration}s ease-in-out`;
    element.style.transform = transform;

    // Reset the transformation after the animation duration
    setTimeout(() => {
      element.style.transform = '';
    }, duration * 1000);
  }
}

// Event listener for keydown
window.addEventListener('keydown', (e) => {
  playSound(e.keyCode);
});

// Event listener for button clicks
const drumButtons = document.querySelectorAll('.key');
drumButtons.forEach(button => {
  button.addEventListener('click', () => {
    const keyCode = button.getAttribute('data-key');
    playSound(parseInt(keyCode));
  });
});

// Remove the animation class after transition ends
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip if not a transform
  this.classList.remove('playing');
}

// Attach the event listener to each key to remove animation after the effect ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
