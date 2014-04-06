'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var PhaserTypescriptGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic PhaserTypescript generator.'));

    var prompts = [
      {
        type: 'input',
        name: 'gameName',
        message: 'What is this game called?',
        default: this._.humanize(path.basename(process.cwd()))
      },
      {
        type: 'input',
        name: 'gameWidth',
        message: 'How wide is the game canvas?',
        default: 640
      },
      {
        type: 'input',
        name: 'gameHeight',
        message: 'How tall is the game canvas?',
        default: 480
      },
      {
        type: 'input',
        name: 'phaserVersion',
        message: 'Which phaser version do you want to use?',
        default: '^2.0.2'
      }
    ];

    this.prompt(prompts, function (props) {
      this.gameName = props.gameName;
      this.gameWidth = props.gameWidth;
      this.gameHeight = props.gameHeight;
      this.phaserVersion = props.phaserVersion;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.template('app/_index.html', 'app/index.html');

    this.mkdir('app/assets');
    this.mkdir('app/assets/images');
    this.copy('app/assets/images/preload-bar.png', 'app/assets/images/preload-bar.png');
    this.copy('app/assets/images/menu-background.png', 'app/assets/images/menu-background.png');

    this.mkdir('app/scripts');
    this.template('app/scripts/_Game.ts', 'app/scripts/Game.ts');

    this.mkdir('app/scripts/State');
    this.template('app/scripts/State/_Boot.ts', 'app/scripts/State/Boot.ts');
    this.template('app/scripts/State/_Preload.ts', 'app/scripts/State/Preload.ts');
    this.template('app/scripts/State/_Menu.ts', 'app/scripts/State/Menu.ts');
    this.template('app/scripts/State/_Main.ts', 'app/scripts/State/Main.ts');

  },

  projectfiles: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
  }
});

module.exports = PhaserTypescriptGenerator;