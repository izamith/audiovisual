let canvas;
var terrainValues = [];
var mult = 50;
var xoff=0;
var yoff=0;
var inc= 0.04;

function setup() {
    angleMode(DEGREES)
    let height = windowHeight;
    let width = windowWidth;
    canvas = createCanvas(width,height, WEBGL);
    canvas.parent("canvas"); 
    
    for(var y = 0; y < 50; y++) {
        terrainValues.push([]);
          xoff = 0
        for(var x = -10; x < 60; x++) {
          
            terrainValues[y][x] = map(noise(x,y),0,1,-mult,mult);
            xoff= xoff+inc
           
        }
       yoff =yoff+inc
    }
}


function draw() { 
    stroke(0,67,70);
    fill(0,44,46);
    
    rotateX(80)
    translate(-width/2, -height/2);
    
    for(var y = 0; y < 50; y++) {
        beginShape(TRIANGLE_STRIP);
        for(var x = -10; x < 60; x++) {
            vertex(x*70, y*70,terrainValues[y][y] );
            vertex(x*70, (y+1)*70,terrainValues[y][x]);
        }
        endShape()
    }
}