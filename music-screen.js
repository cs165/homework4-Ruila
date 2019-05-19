// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this._gif = new GifDisplay();
    this._audioPlayer = new AudioPlayer();
    this._button = new PlayButton();

    this.back = document.querySelector('#back');
    this.back_fun = this.back_fun.bind(this);
    this.back.addEventListener('click', this.back_fun);
    this.musicScreen = document.querySelector('#musicScreen');
    this.menu = document.querySelector('#menu');

    this.play = document.querySelector('#play');
    this.pause = document.querySelector('#pause');
    this.play_fun = this.play_fun.bind(this);
    this.play.addEventListener('click', this.play_fun);
    this.pause_fun = this.pause_fun.bind(this);
    this.pause.addEventListener('click', this.pause_fun);


  }
  // TODO(you): Add methods as necessary.

  back_fun() {
    this.musicScreen.classList.add('inactive');
    this.menu.classList.remove('inactive');
    this._audioPlayer.pause();
    this.pause.classList.add('inactive');
    this.play.classList.remove('inactive');
    console.log("check");
  }

  play_fun() {
    this._audioPlayer.play();
    this.play.classList.add('inactive');
    this.pause.classList.remove('inactive');
  }

  pause_fun() {
    this._audioPlayer.pause();
    this.pause.classList.add('inactive');
    this.play.classList.remove('inactive');
  }
}
