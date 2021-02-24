class Player {
  constructor(){
    //number property
    this.index=null;
    //distance property
    this.distance=0;
    //name property
    this.name=null;
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    //Using string concatenation, we are adding this.index to the player folder
    var playerIndex = "players/player"+this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  //To get player's information, which us used to start the game
  //static function is called by the class name itself and doesn't need object to show output.
  //It is not attached to just ONE PLAYER but ALL OF THE PLAYERS--Just like a group
  static getPlayerInfo(){
 
    var playerInfoRef=database.ref('players');
    //arrow function will bind the function to original object(player1, player2...) which calls it 
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val();
    })
    
    
  }
}
