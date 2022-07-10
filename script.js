const pauseBtn = document.getElementById("pause-container");
const playContainer = document.getElementById("play-container");
let playBtn = document.getElementById("play");
const audio = document.getElementById("audio")
const prev = document.getElementById("prev")
let playlist = document.getElementById("playlist")
const next = document.getElementById("next")

const dark = document.getElementById("dark")

const canvas = document.querySelector('canvas');
canvas.style.width = "100%"
canvas.style.height = "100%"
const c = canvas.getContext('2d');


const title = document.getElementById("title")
const prevBtn = document.getElementById("prev-btn")
const playlistBtn = document.getElementById("playlist-btn")
const nextBtn = document.getElementById("next-btn")
let playContent = document.getElementsByClassName("play-container")
const body = document.getElementsByTagName("body")

const audioList = document.getElementsByClassName("audio");

// function darkfun() {


// }


// song titles
const songs = [ 'SIMPLIFIED','DREAM' + ' ' + 'WORLD', 'HIGHER' + ' ' + 'POWER', 'FLIP', 'VELVET' + ' ' + 'ROPES'];

// Keep track of songs 
let songIndex = 0;
let songArry = 4;

// initially load song info DOM
loadSong(songs[songIndex]);

// update song details 
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`

    // cover.src = `images/${song}.png`
}

function playSong(Element) {
        playContent[songIndex].innerHTML = '<ion-icon class="pause" id="pause" name="pause-sharp" ></ion-icon>';
        playContent[songIndex].setAttribute("onclick","pauseSong(this)");
        playlist.innerHTML = '<ion-icon class="pause pausePlaylist" id="pause" onclick="pauseSong(this)" name="pause-sharp" ></ion-icon>'
        audio.play();
        canvas.style.display = 'flex';

        // for (let i=0; i < (songArry+1);i++){
        //     if (Element == playContent[i]) {
               
        //        audioList[i].play();
        //     playContent[i].innerHTML = '<ion-icon class="pause" id="pause" name="pause-sharp" ></ion-icon>';
        //     playContent[i].setAttribute("onclick","pauseSong(this)");
        //     playlist.innerHTML = '<ion-icon class="pause pausePlaylist" id="pause" onclick="pauseSong(this)" name="pause-sharp" ></ion-icon>'
        //     songIndex = i;
        //     title.innerText = songs[i];

        //     for (let j=0;j<songArry+1;j++)
        //     {
        //         if (audioList[j] != audioList[i]){
        //             audioList[j].pause()
        //         }
        //     }
               
                
        //     }
        // }
       
      
      

}

function pauseSong(Element) {
    playContent[songIndex].innerHTML = '<ion-icon class="play" id="play"name="play-sharp">';
    playContent[songIndex].setAttribute("onclick", "playSong(this)")
    playlist.innerHTML = ' <ion-icon class="playlist-controls" id="playlist-btn" onclick="playSong(this)" name="play-sharp">'
    audio.pause();
    canvas.style.display= 'none';

    // for (let i=0; i < (songArry+1);i++){
    //     if (Element == playContent[i]) {
           
    //        audioList[i].pause();
    //        playContent[songIndex].innerHTML = '<ion-icon class="play" id="play"name="play-sharp">';
    //        playContent[songIndex].setAttribute("onclick", "playSong(this)")
    //        playlist.innerHTML = ' <ion-icon class="playlist-controls" id="playlist-btn" onclick="playSong(this)" name="play-sharp">'
    //     songIndex = i;
           
            
    //     }
    // }



}

function prevSong() {
    playContent[songIndex].innerHTML = '<ion-icon class="play" id="play"name="play-sharp">';
    songIndex--;
    
    if(songIndex < 0)
    {
        songIndex = songs.length - 1;
    }
    
    loadSong(songs[songIndex])

    playSong()
    
}

function nextSong() {
    playContent[songIndex].innerHTML = '<ion-icon class="play" id="play"name="play-sharp">';
    songIndex++;

    if(songIndex > songArry)
    {
        songIndex = 0;
    }
    
    loadSong(songs[songIndex])

    playSong()
}









c.beginPath();


canvas.width = innerWidth ;
canvas.height = innerHeight ;
// ctx.globalCompositeOperation = "lighter";

c.moveTo(0,canvas.height / 2)


 

      // ~~~~~~~~~~~~~~~~~~~~~WAVE Object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      const wave = 
      {
        y: 280,
        length: -0.010, 
        amplitude: -100,
        frequency: 0.05,
      };
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      // -----------------------STROKE Object -----------------------------------------------
      const strokeColor = 
      {
        h:3,
        s:67,
        l:46,
      }
      // ----------------------------------------------------------------------------------------

      // |||||||||||||||||||||||||||BACKGROUND Object |||||||||||||||||||||||||||||||||||||||||||||
      const backgroundColor = 
      {
        r:255,
        g:255,
        b:255,
        a:0.08,
      }
      // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  
      // {{{{{{{{{{{{{{{{ User Interface Dependency code  }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

      // var gui = new dat.gui.GUI();
      // gui.remember(wave);

      // ++++++++++++++++++++++++Folders Declaration+++++++++++++++++++++ 
         
      // const waveFolder = gui.addFolder('wave')
      // waveFolder.add(wave, 'length', -0.01, 0.01)
      // waveFolder.add(wave, 'amplitude', -300, 300)
      // waveFolder.add(wave, 'y', 0, canvas.height/2)
      // waveFolder.add(wave, 'frequency', -0.01, 1)
  
      // const strokeColorFolder = gui.addFolder('strokeColor')
      // strokeColorFolder.add(strokeColor, 'h', 0,255)
      // strokeColorFolder.add(strokeColor, 's', 0,100)
      // strokeColorFolder.add(strokeColor, 'l', 0,100)
     
      // const backgroundFolder = gui.addFolder('background')
      // backgroundFolder.add(backgroundColor, 'r', 0, 255)
      // backgroundFolder.add(backgroundColor, 'g', 0, 255)
      // backgroundFolder.add(backgroundColor, 'b', 0, 255)
      // backgroundFolder.add(backgroundColor, 'a', 0, 100)

      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


      // ++++++++++++++++++ Animation Function ++++++++++++++++++++++++++++++++++++++++++++++++++++

      let increment = wave.frequency;

      function animate() 
      {
        requestAnimationFrame(animate)      
        c.fillRect(0,0,canvas.width, canvas.height)
        c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;  
        c.beginPath()
        c.moveTo(0,canvas.height / 2)
  
        for (let i = 0; i < canvas.width; i++)
        {
          c.lineTo(i, wave.y + Math.sin(i * wave.length  + increment ) * wave.amplitude * Math.sin(increment *0.7))  
        }
   
         c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`
         c.stroke()
         increment += wave.frequency;
      
      
      }
      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
    //   canvas.globalAlpha
      animate()
  

