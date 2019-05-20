// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
//
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.inputValue;

    this.apiKey ='dmL1PTExxXifuljS8M39DIaimPwH9D9F';
    this.url;
    this.section = document.querySelector('#displayGif');
    this.onJsonReady = this.onJsonReady.bind(this);
    //console.log(this.section);

  }

  loadGif(){
    //console.log("ggggg"+this.inputValue);
    this.url = "https://api.giphy.com/v1/gifs/search?q="+this.inputValue+"&api_key="+this.apiKey+"&limit=25";
    fetch(this.url)
        .then(this.onResponse)
        .then(this.onJsonReady);
    }

  onJsonReady(json) {
      console.log(json);
      //console.log(json.data);
      //console.log(json.data[0].images.downsized_large.url);
      for(let i=0;i<25;i++)
      {
        this.section.style.backgroundImage = `url(${json.data[i].images.downsized.url})`;
        console.log('urlloop='+json.data[i].images.downsized.url);
      }


    }

  onResponse(response) {
      return response.json();
    }

}
