module <%= _.classify(gameName) %>.State {
  export class Menu extends Phaser.State {
    background: Phaser.Sprite;

    create() {
      this.background = this.add.sprite(80, 0, 'menu-background');
      this.input.onDown.addOnce(() => {
        this.game.state.start('main');
      });
    }
  }
}