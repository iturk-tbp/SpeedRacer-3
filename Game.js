class Game {
  constructor() {}
  getState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value",function(data){
      gameState = data.val();
    })
  }
  update(state){
    database.ref("/").update({
      gameState: state
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();

    car1 = createSprite(width/2-50,height-100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07

    car2 = createSprite(width/2 + 100,height-100);
    car2.addImage("car2",car2_img);
    car2.scale = 0.07

    cars = [car1,car2]
  }
  handleElements(){
    form.hide()
    form.titleImage.position(40,50);
    form.titleImage.class("gameTitle2")
  }
  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined){
      image(track,0,-height*5,width,height*6);
      drawSprites();
    }
    
  }
}
