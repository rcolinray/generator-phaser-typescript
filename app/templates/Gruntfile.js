module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    typescript: {
      app: {
        src: ['app/scripts/Game.ts'],
        dest: 'build/js/main.js',
        options: {
          sourceMap: true
        }
      }
    },
    copy: {
      app: {
        files: [
          {
            cwd: 'app',
            expand: true,
            src: ['**/*.html', '!vendor/**/*.html', 'assets/**/*'],
            dest: 'build/'
          }
        ]
      },
      bower: {
        files: [
          {
            'build/vendor/phaser.min.js': 'app/vendor/phaser-official/build/phaser.min.js',
            'build/vendor/phaser.map': 'app/vendor/phaser-official/build/phaser.map'
          }
        ]
      }
    },
    open: {
      app: {
        path: 'http://localhost:8080'
      }
    },
    connect: {
      app: {
        options: {
          port: 8080,
          base: 'build',
          livereload: true
        }
      }
    },
    watch: {
      app: {
        files: 'app/**/*',
        tasks: ['typescript', 'copy'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['typescript', 'copy', 'open', 'connect', 'watch']);
}