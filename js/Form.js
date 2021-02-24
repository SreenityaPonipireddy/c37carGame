class Form {
  constructor() {
    //VERY VITAL AND IMPORTANT TO FORM CLASS
    this.input=createInput("Name");
    this.button=createButton("Click ME!");
    this.greeting=createElement('h2');
  }
  //Making form hide when names are entered
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);
    //These actions depend upon the properties of the class and not this.button.mousePressed
    //This is why the arrow function is made: It will directly refer to the properties of FORM Class
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      //PROPERTY OF PLAYER CLASS; name
      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
