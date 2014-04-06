module <%= _.classify(gameName) %>.State {
  export class Main extends Phaser.State {
    create() {
      this.stage.backgroundColor = 0x000000;
      
      // Create game objects here
    }
  }
}