var song 
var amp
var volhistory = []


function preload() {
    soundFormats('ogg', 'mp3');
    song = new loadSound('../assets/this-dot-kp.mp3');
    console.log("loaded song");
}

function setup() {
    var width = windowWidth;
    var height = windowHeight;
    let canvas = createCanvas(width, height-50);
    canvas.parent('canvas');
    song.play();
    amp = new p5.Amplitude();
   
}

function draw() {
  background(252,247,248)
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0, 67, 70);

  for (var i = 0; i < volhistory.length; i++) {
    
    vertex(i, volhistory[i],);
  }
}





/*colocar em um js separado
 function falar() {
                if (talking == 1) {
                    mic.start();
                    talking = 0;
                    console.log("talking");
                }
                else {
                    mic.stop();
                    talking = 1;
                }   
            }

  function tocar() {
                if (playing == 1) {
                    song.play();
                    playing = 0;
                    console.log("playing song");
                }
                else {
                    song.pause();
                    playing = 1;
                }   
            }
            */




