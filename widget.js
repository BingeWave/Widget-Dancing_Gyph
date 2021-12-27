async function loadGifs() {
 
  let api_key='replace_with_your_key';
  
  let query = 'transparent-dancing';
  
  let url = 'https://api.giphy.com/v1/gifs/search?api_key='+ api_key + '&q='+query;
  
  const response = await fetch(url);
  
  let gifs = await response.json();
  
  return gifs;
}

function selectRandomGif(gifs) {
   return gifs[Math.floor(Math.random()*gifs.length)];
}

function placeGifOnScreen(gif) {
     
     let webp = gif.images.fixed_height.webp
     
     let id = BWProperties['namespace'] + "_account_"+BWProperties['participant']['account']['id'];
  
     let element = document.createElement('img')
    
     element.src = webp;
  
     let gif_container = document.getElementById(id);
  
    if(gif_container) {
      gif_container.innerHTML = ""
      gif_container.appendChild(element);
    }
}

async function load() {
  let gifs = await loadGifs();

  let gif = selectRandomGif(gifs.data);

  placeGifOnScreen(gif);
  
}

load();

