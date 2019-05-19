// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.

    this._menu = new MenuScreen();
    this._menu.loadSong();
    this._menu.theme();

    this.selector = document.querySelector('#song-selector');

    this.musicScreen = document.querySelector('#musicScreen');
    this.menu = document.querySelector('#menu');
    this.submit = document.querySelector('#submit');
    this.input = document.querySelector('#query-input');


    this.change_view = this.change_view.bind(this);
    this.submit.addEventListener('click', this.change_view);

    this._musicScreen = new MusicScreen();
    this._onKick = this._onKick.bind(this);
  //  console.log(this.menu.input.value);
  }

  change_view(){
    const value = this.selector.options[this.selector.selectedIndex].dataset.id;
    const url = this.selector.options[this.selector.selectedIndex].dataset.url;
    console.log(this.index);
    console.log("value="+value);
    console.log("url="+url);

    this._musicScreen._audioPlayer.setSong(url);
    this._musicScreen._audioPlayer.setKickCallback(this._onKick);
    //console.log("app="+this.input.value);
    this._musicScreen._gif.inputValue = this.input.value;
    this._musicScreen._gif.loadGif();
  //  console.log("app1="+this._musicScreen._gif.inputValue);
    this.menu.classList.add('inactive');
    this.musicScreen.classList.remove('inactive');
  }

  _onKick() {
    console.log('kick!');
  }
}
