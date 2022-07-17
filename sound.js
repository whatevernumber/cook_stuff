const orderBell = document.querySelector('.order-bell-audio');

let sound = new Howl({
    src: ['sound.mp3']
});

sound.play();

// let bell = ('https://raw.githubusercontent.com/the-nepodarok/the-nepodarok.github.io/main/files/bell.mp3');
