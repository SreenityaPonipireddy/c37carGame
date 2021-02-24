/*class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
//To make sure the players wait for the others to enter
  async start(){
    if(gameState === 0){
      player = new Player();
      //.once will ONLY LISTEN ONE TIME to a particular player, wheres, .on keeps listening
      var playerCountRef=await database.ref('playerCount').once("value");
      //When the playerCount value is there then you will know a player entered. This updates the counting
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      } 
      form = new Form()
      form.display();
    }   
  }

  play(){ 
    form.hide();
    textSize(30);
    text("START GAME", 120, 100);
    //To call a static function, you have to call it by the CLASS NAME and not the OBJECT
    Player.getPlayerInfo();
    
    //When all of the four players are defined:
    if(allPlayers!==undefined){
      //y Position changing
      var displayPosition=130;
      //To make the own player's name turn red (IN YOUR OWN TAB)
      for(var plr in allPlayers){
        //Based on order. In plr, it will check the player number 
        //plr=player1,player2,player3,player4
        if(plr==="player"+player.index){
          fill("red");
        }
        else{
          fill("black");
        }
      }


      displayPosition+=20;
     
      textSize(15);
      //Declaring a new variable in array. plr refers to player1, player2, etc.
      //Then add name with string concatenation
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
      
    }
    //There has to be a value in the distance for the incrementing to occur
   if(keyIsDown(UP_ARROW)&&player.index!==null) {
     player.distance+=50;
     player.update();
   }
  }
}*/


class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
