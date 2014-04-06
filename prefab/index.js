'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PrefabGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating a new prefab called ' + this._.classify(this.name) + '.');
    var pkg = require(process.cwd() + '/package.json');
    this.moduleName = this._.classify(pkg.name);
  },

  files: function () {
    this.template('_Prefab.ts', 'app/scripts/Prefab/' + this._.classify(this.name) + '.ts');
  }
});

module.exports = PrefabGenerator;