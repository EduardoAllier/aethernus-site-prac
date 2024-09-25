document.addEventListener("DOMContentLoaded", function () {
    const sound = document.getElementById('hover-sound');
    sound.volume = 0.15;
    
    function playSound() {
      sound.currentTime = 0; // Reset to start
      sound.play();
    }

    const hoverElements = document.querySelectorAll('form input, textarea, button, a');
    hoverElements.forEach(element => {
      element.addEventListener('mouseover', playSound);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sound = document.getElementById('meow');
    function playSoundMeow() {
      sound.currentTime = 0;
      sound.play();
    }

    const hoverElements = document.querySelectorAll('#about img');
    hoverElements.forEach(element => {
      element.addEventListener('mouseover', playSoundMeow);
    });
  });
  