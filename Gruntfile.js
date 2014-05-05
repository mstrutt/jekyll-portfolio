module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ['build'],
			development: ['development'],
			staging: ['staging']
		},
		copy: {
			build: {
				expand: true,
				cwd: 'app',
				src: [
					'**',
					// '!assets/scripts/**',
					'!assets/styles/**',
					'!assets/images/**'
				],
				dest: 'build'
			},
			images: {
				expand: true,
				cwd: 'app',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'build'
			},
			js: {
				expand: true,
				cwd: 'app',
				src: ['assets/scripts/**'],
				dest: 'development'
			},
			css: {
				expand: true,
				cwd: 'build',
				src: ['assets/styles/**.css'],
				dest: 'development'	
			},
			deploy: {
				expand: true,
				cwd: 'staging',
				src: ['**'],
				dest: 'live'
			}
		},
		sass: {
			build: {
				files: {
					'build/assets/styles/site.css': 'app/assets/styles/site.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 3 version']
			},
			main: {
				src: 'build/assets/styles/site.css',
				dest: 'build/assets/styles/site.css'
			}
		},
		imagemin: {
			build: {
				files: [{
					expand: true,
					cwd: 'app',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build'
				}]
			}
		},
		uglify: {
			options: {
				garbled: false
			}
		},
		useminPrepare: {
			html: 'build/_layouts/page.html',
			options: {
				flow: {
					html: {
						steps: {
							'js': ['uglifyjs'],
							'css': ['cssmin']
						},
						post: {}
					}
				},
				root: 'build',
				dest: 'build'
			}
		},
		usemin: {
			html: 'build/_layouts/page.html'
		},
		jekyll: {
			options: {
				config: '_config.yml'
			},
			development: {
				options: {
					src : 'build',
					dest: 'development'
				}
			},
			staging: {
				options: {
					src: 'build',
					dest: 'staging'
				}
			}
		},
		match_media: {
			desktop: {
				files: {
					'build/assets/styles/desktop.css': ['build/assets/styles/site.css']
				}
			}
		},
		watch: {
			css: {
				files: ['app/assets/styles/**.scss'],
				tasks: ['buildcss', 'copy:css']
			},
			js: {
				files: ['app/**.js'],
				tasks: ['copy:js']
			},
			html: {
				files: ['app/**.html', 'app/**.markdown'],
				tasks: ['copy:build', 'jekyll:development']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-match-media');

	grunt.registerTask('default', ['development', 'watch']);

	grunt.registerTask('buildcss', ['sass', 'autoprefixer']);
	grunt.registerTask('minify', [
		'useminPrepare',
		'uglify',
		'cssmin',
		'usemin',
	]);

	grunt.registerTask('development', [
		'clean:build',
		'copy:build',
		'copy:images',
		'buildcss',
		'jekyll:development'
	]);

	grunt.registerTask('staging', [
		'clean:build',
		'copy:build',
		/** /
			'copy:images'/*/
			'imagemin'
		/**/,
		'buildcss',
		'match_media',
		'minify',
		'jekyll:staging'
	]);

	grunt.registerTask('deploy', [
		'staging',
		'copy:deploy'
	]);
};