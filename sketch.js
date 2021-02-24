var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if (playerCount===4){
  //This is equal to gameState===PLAY
  game.update(1);
}
if(gameState===1){
  //this clears out the screen except output
  clear();
  game.play();
}
  
}
