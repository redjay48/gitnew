function playSound(e) {
    let track = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!track) return; // stop the function from running all together
    track.currentTime = 0; //rewind to start
    track.play();
    const pad = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    pad.classList.add('playing');
    pad.addEventListener('transitionend', e => {
        e.target.classList.remove('playing');
    })
};

window.addEventListener('keydown', playSound);
