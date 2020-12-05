//Isabela Zamith, 2020
//p5.js

var song;
var ampmusic;
var ampmic;
var button;
let mic;
var vol;
var song1;
var song2;
var song3;
var s;
let arraymusicas
var volhistory = [];

function shufflemusica() {
  arraymusicas = [song1,song2,song3,song4,song5];
  s = Math.floor(Math.random() * (arraymusicas.length - 0)) + 0;
  song = arraymusicas[s];
  console.log(s)

  if (s==0) {
   document.getElementById("currentTrack").innerHTML = "Slipknot - Psychosocial";
  }
  else if (s==1) {
    document.getElementById("currentTrack").innerHTML = "Ariana Grande - Positions";
  }
  else if (s==2) {
    document.getElementById("currentTrack").innerHTML = "Exaltasamba - Me apaixonei pela pessoa errada";
  }
  else if (s==3) {
    document.getElementById("currentTrack").innerHTML = "Infrassom 18hz, você consegue ouvir? NÃO AUMENTE O VOLUME para evitar danos aos seus autofalantes";
  }
 else if (s==4) {
    document.getElementById("currentTrack").innerHTML = "Louis Armstrong - What a wonderful world";
  }
}

function preload() {
  song1 = loadSound('../assets/slipk.mp3');
  song2 = loadSound('../assets/ariana.mp3');
  song3 = loadSound('../assets/exalta.mp3');
  song4 = loadSound('../assets/18hz.wav');
  song5 = loadSound('../assets/louis.mp3');
  shufflemusica(); 
}

function setup() {
  song.play(0.1);
  mic = new p5.AudioIn();
  var width = windowWidth;
  var height = windowHeight;
  let canvas = createCanvas(width, height-50);
  canvas.parent('canvas');   
  ampmusic = new p5.Amplitude();
  ampmic = new p5.AudioIn();
  console.log('Setup Complete')
}

function draw() {
      background(252,247,248);
      vol = ampmusic.getLevel();
      volhistory.push(vol);
      stroke(0,67,70);
      //fill(0,67,70);
      noFill();
      var currentY = map(vol, 0, 1, height, 0);
      console.log(vol)
      translate(0, height / 2 - currentY);
      push();
      beginShape();
      for (var i = 0; i < volhistory.length; i++) {
        var y = map(volhistory[i], 0, 1, height-50, 0);  
          vertex(i, y);
      }   
      endShape();
      pop();
      if (volhistory.length > width -30) {
        volhistory.splice(0, 1);
      }
}

  //stroke(255, 0, 0);
  //line(width - 5, 0, width - 5, height);
  //ellipse(100, 100, 200, vol * 200);
        
function trocaMusica() {  
  if (song.isPlaying()) {
        song.stop();
        shufflemusica();
        song.play()
      } else {
        shufflemusica();
        song.play();
      }
    }

function toggleSong() {
  if (song.isPlaying()) {
        song.pause();
      } else {
        song.play();
      }
}
 




//Special thanks to the Coding Train p5.js tutorials on youtube! :)
