'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var StateGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating a new game state called ' + this._.classify(this.name) + '.');
    var pkg = require(process.cwd() + '/package.json');
    this.moduleName = this._.classify(pkg.name);
  },

  files: function () {
    this.template('_State.ts', 'app/scripts/State/' + this._.classify(this.name) + '.ts');
  }
});

module.exports = StateGenerator;