'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: [
                'dist'
            ]
        },
        browserify: {
            dist: {
                files: {
                    'dist/persiannumbertostring.js': 'lib/index.js'
                }
            },
            options: {
                browserifyOptions: {'standalone': 'PersianNumberToString'}
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/persiannumbertostring.min.js': 'dist/persiannumbertostring.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dist', [
        'clean:dist',
        'browserify:dist',
        'uglify:dist'
    ]);
};
