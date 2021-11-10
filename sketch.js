var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_img, car2_img, track, car1, car2, allPlayers
var cars = []
var gameState

function preload() {
  backgroundImage = loadImage("background.png");
  car1_img = loadImage("car1.png")
  car2_img = loadImage("car2.png")
  track = loadImage("track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
