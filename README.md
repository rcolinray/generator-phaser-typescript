# NOTE: This project is no longer under active development.

I don't use Phaser these days, so I am no longer using this generator. If you are still using it I am happy to review and accept your pull requests. If  you are interested in maintaining this repository let me know and I can transfer it to you.

# generator-phaser-typescript 

> [Yeoman](http://yeoman.io) generator

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-phaser-typescript from npm, run:

```
$ npm install -g generator-phaser-typescript
```

Finally, initiate the generator:

```
$ yo phaser-typescript
```

### Yeoman Sub-Generators

The generator includes two sub-generators: one for generating new game states (extending `Phaser.State`), and one for generating new prefabs (extending `Phaser.Sprite`).

To use the state sub-generator, run:
```
$ yo phaser-typescript:state StateName
```

To use the `prefab` sub-generator, run:

```
$ yo phaser-typescript:prefab PrefabName
```

### Grunt Tasks

The default grunt task will build the project and start a server at `http://localhost:8080`. The project also uses grunt-contrib-watch and connect-livereload to automatically reload your files when they are modified.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT

## Credits

The design of this generator is modeled after the excellent [generator-phaser-official](https://github.com/codevinsky/generator-phaser-official) by [codevinsky](https://github.com/codevinsky).
