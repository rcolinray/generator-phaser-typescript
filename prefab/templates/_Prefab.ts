module <%= moduleName %>.Prefab {
  export class <%= _.classify(name) %> extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
      super(game, x, y, '<%= _.slugify(name) %>', 0);

      // Set prefab properties here

      game.add.existing(this);
    }

    update() {
      // Update prefab here
    }
  }
}
