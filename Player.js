class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
  addPlayer(){
    var playerIndex = "players/player" + this.index;
    if(this.index === 1){
      this.positionx = width/2 - 100;
    }
    else{
      this.positionx = width/2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony
    })
  }
  getCount(){
    var countref = database.ref("playerCount")
    countref.on("value",data => {
      playerCount = data.val()
    })
  }
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
  static getPlayersInfo(){
    var playerInforef = database.ref("players")
    playerInforef.on("value",data =>{
      allPlayers = data.val();
    })
  }
}
