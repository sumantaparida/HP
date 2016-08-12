'use strict';
/**
 * Livereload and connect variables
 */
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
  return require('serve-static')(require('path').resolve(dir));
};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
          src: 'source',
          app: 'app',
          assets: 'app',
          css: ['<%= project.src %>/sass/style.scss'],
          js: ['<%= project.src %>/js/*.js']
        },
        // SASS
        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              'app/css/style.css': '<%= project.css %>'
            }
          }
        },
        // CSS MIN
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/css/style.min.css': ['app/css/style.css']
                }
            }
        },

        // UGLIFY
        uglify: {
            options: {
                mangle: false
            },
            home: {
                files: {
                    'app/js/hp.home.min.js':
                    [
                      'source/js/home/jquery-2.0.0.min.js',
                      'source/js/home/Default1.js',
                      'source/js/home/bootstrap.js',
                      'source/js/home/lightslider.js',
                      'source/js/home/common.js',
                      'source/js/home/Jquery-1.8.0.js',
                      'source/js/home/jquery-ui.js',
                      'source/js/home/bootstrap2.js',
                      'source/js/home/bootstrap-multiselect.js'
                    ]
                }
            },
            citypage: {
                files: {
                    'app/js/hp.citypage.min.js':
                    [
                      'source/js/citypage/Jquery-1.8.0.js',
                      'source/js/citypage/jquery-ui.js',
                      'source/js/citypage/HomePopup.js',
                      'source/js/citypage/bootstrap.js',
                      'source/js/citypage/HomeSearchScript.js',
                      'source/js/citypage/Default.js',
                      'source/js/citypage/jquery.easing.min.js',
                      'source/js/citypage/jquery.easy-ticker.js',
                      'source/js/citypage/bannerscollection_zoominout.js',
                      'source/js/citypage/jquery.ui.touch-punch.min.js',
                      'source/js/citypage/jquery_cookie.js',
                      'source/js/citypage/bootstrap.min.js',
                      'source/js/citypage/bootstrap-multiselect.js',
                      'source/js/citypage/jquery.balloon.min.js',
                      'source/js/citypage/modernizr.js',
                      'source/js/citypage/prettyphoto.js',
                      'source/js/citypage/owl.carousel.min.js',
                      'source/js/citypage/jquery.flexslider.js',
                      'source/js/citypage/helper-plugins.js',
                      'source/js/citypage/bookmarkscroll.js',
                      'source/js/citypage/waypoints.js',
                      'source/js/citypage/init.js'
                    ]
                }
            },
            search: {
                files: {
                    'app/js/hp.search.min.js':
                    [
                      'source/js/search/Jquery-1.8.0.js',
                      'source/js/search/jquery-ui.js',
                      'source/js/search/HomePopup.js',
                      'source/js/search/bootstrap.js',
                      'source/js/search/bootstrap-multiselect.js',
                      'source/js/search/SearchProperty.js',
                      'source/js/search/commonscript.js',
                      'source/js/search/SearchPanel.js',
                      'source/js/search/retina-1.js',
                      'source/js/search/jshashtable-2.js',
                      'source/js/search/jquery_002.js',
                      'source/js/search/tmpl.js',
                      'source/js/search/jquery.js',
                      'source/js/search/draggable-0.js',
                      'source/js/search/jquery_003.js',
                      'source/js/search/custom.js',
                      'source/js/search/fm.selectator.jquery.js',
                      //'source/js/search/jquery.bvalidator-yc.js',
                      'source/js/search/bootstrap.min.js',
                      'source/js/search/modernizr.js',
                      'source/js/search/prettyphoto.js',
                      'source/js/search/owl.carousel.min.js',
                      'source/js/search/jquery.flexslider.js',
                      'source/js/search/helper-plugins.js',
                      'source/js/search/bookmarkscroll.js',
                      'source/js/search/waypoints.js',
                      'source/js/search/init.js',
                      'source/js/search/jquery_cookie.js'
                    ]
                }
            }
        },
        // OPEN
        open: {
          server: {
            path: 'http://localhost:<%= connect.options.port %>'
          }
        },
        // WATCH
        watch: {
          options: {livereload: true},
          sass: {
            // We watch and compile sass files as normal but don't live reload here
            files: ['<%= project.src %>/sass/{,*/}*.{scss,sass}'],
            tasks: ['sass', 'cssmin'],
          },
          livereload: {
            options: {
              livereload: LIVERELOAD_PORT
            },
            files: [
              '<%= project.app %>/{,*/}*.html',
              '<%= project.app %>/css/*.css',
              '<%= project.app %>/js/{,*/}*.js',
              '<%= project.app %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
          }
        },
        //  Connect
        connect: {
          options: {
            port: 9999,
            hostname: '*'
          },
          livereload: {
            options: {
              middleware: function(connect) {
                return [lrSnippet, mountFolder(connect, 'app')];
              }
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('home', ['uglify:home']);
    grunt.registerTask('citypage', ['uglify:citypage']);
    grunt.registerTask('search', ['uglify:search']);
    // grunt.registerTask('server', ['express','watch']);
    grunt.registerTask('default', ['uglify', 'connect:livereload', 'open', 'watch']);

};
