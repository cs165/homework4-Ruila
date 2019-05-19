// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
  this.onResponse = this.onResponse.bind(this);
  this.onJsonReady = this.onJsonReady.bind(this);

  const form = document.querySelector('form');
  form.addEventListener('submit', this._onSubmit);

///////////////
  this.selector = document.querySelector('#song-selector');
  this.input = document.querySelector('#query-input');
  this.add_select = this.add_select.bind(this);

  this.array = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];


  }
  // TODO(you): Add methods as necessary.

  theme(){
    this.input.value = this.array[Math.floor(Math.random()*11)];
  //  console.log("value="+this.input.value);
  }

  add_select(json) {
      for(let i=0 ; i<Object.keys(json).length ; i++)
      {
        const option = document.createElement("option");
        option.textContent = Object.keys(json)[i];
        option.dataset.id = Object.keys(json)[i];
        option.dataset.url = json[option.textContent].songUrl;
        this.selector.appendChild(option);
      //  console.log("url"+option.dataset.url);
      //  console.log(json);
      }
  }

  ///////
  loadSong(){

      fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
          .then(this.onResponse)
          .then(this.onJsonReady);
    }

  onJsonReady(json) {
        //console.log(json.夫妻.songUrl);
        this.add_select(json);

    }

  onResponse(response) {
      return response.json();
    }

    _onSubmit(event) {
      event.preventDefault();
    }


}
