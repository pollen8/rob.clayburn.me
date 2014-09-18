/*global module:false*/
'use strict';
//var opts = require('./options.js');

module.exports = function (grunt) {


	
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var directoriesConfig = {
        
        less: {
			// target.css file: source.less file
			"public/css/template.min.css": "source/less/style.less",
		}
    
    };
    
	// Project configuration.
	grunt.initConfig({
		
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: directoriesConfig.less
			}
		},

		
		// Observe file changes so we automatically run specific tasks
		watch: {
			styles: {
				// Which files to watch (all .less files recursively in the less directory)
				files: ['source/less/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			
		}
		
	});
	
	// Load plug-ins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	grunt.registerTask('default', ['watch']);
	
};
