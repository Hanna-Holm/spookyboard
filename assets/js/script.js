window.addEventListener('keydown', function(event) {
    console.log(event);
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    let board = document.querySelectorAll('.key');
    board.forEach(function(key) {
        key.addEventListener('transitionend', removeTransition);
    });

    function removeTransition(event) {
        if (event.propertyName !== 'transform') {
            return;
        }
        this.classList.remove('playing');
    }

});
