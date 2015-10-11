module.exports = function (grunt) {
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Configurable paths
	var config = {
		app: 'app',
		temp: '.tmp',
		build: 'build',
		dist: 'dist'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		config: config,

		clean: {
			temp: ['<%= config.temp %>'],
			build: ['<%= config.build %>']
		},

		copy: {
			temp: {
				expand: true,
				cwd: '<%= config.app %>',
				src: [
					'**',
					'!assets/styles/**',
					'!assets/images/**'
				],
				dest: '<%= config.temp %>'
			},
			images: {
				expand: true,
				cwd: '<%= config.app %>',
				src: ['**/*.{png,jpg,gif}'],
				dest: '<%= config.temp %>'
			},
			css: {
				expand: true,
				cwd: '<%= config.temp %>',
				src: ['assets/styles/**.css'],
				dest: '<%= config.build %>'
			},
			js: {
				expand: true,
				cwd: '<%= config.app %>',
				src: ['assets/scripts/**'],
				dest: '<%= config.build %>'
			}
		},

		sass: {
			build: {
				files: {
					'<%= config.temp %>/assets/styles/site.css': '<%= config.app %>/assets/styles/site.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 3 version']
			},
			main: {
				src: '<%= config.temp %>/assets/styles/site.css',
				dest: '<%= config.temp %>/assets/styles/site.css'
			}
		},

		match_media: {
			desktop: {
				files: {
					'<%= config.temp %>/assets/styles/desktop.css': ['<%= config.temp %>/assets/styles/site.css']
				}
			}
		},

		svgstore: {
			icons: {
				options: {
					includeTitleElement: false
				},
				files: {
					'<%= config.app %>/_includes/icons.svg': ['<%= config.app %>/assets/images/icons/*.svg']
				}
			}
		},

		imagemin: {
			build: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= config.temp %>'
				}]
			}
		},

		uglify: {
			options: {
				garbled: false
			}
		},

		useminPrepare: {
			html: '<%= config.temp %>/_layouts/page.html',
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
				root: '<%= config.temp %>',
				dest: '<%= config.temp %>'
			}
		},

		usemin: {
			html: '<%= config.temp %>/_layouts/page.html'
		},

		jekyll: {
			options: {
				config: '_config.yml'
			},
			build: {
				options: {
					src : '<%= config.temp %>',
					dest: '<%= config.build %>'
				}
			},
			dist: {
				options: {
					src: '<%= config.temp %>',
					dest: '<%= config.dist %>'
				}
			}
		},

		phantomcss: {
			x_small: {
				options: {
					screenshots: 'tests/visual/x-small/',
					results: 'results/visual/x-small/',
					viewportSize: [320, 480]
				},
				src: [
					'tests/visual/init.js',
					'tests/visual/spec/*.js'
				]
			},
			small: {
				options: {
					screenshots: 'tests/visual/small/',
					results: 'results/visual/small/',
					viewportSize: [480, 768]
				},
				src: '<%= phantomcss.x_small.src %>'
			},
			medium: {
				options: {
					screenshots: 'tests/visual/medium/',
					results: 'results/visual/medium/',
					viewportSize: [768, 1024]
				},
				src: '<%= phantomcss.x_small.src %>'
			},
			large: {
				options: {
					screenshots: 'tests/visual/large/',
					results: 'results/visual/large/',
					viewportSize: [1024, 768]
				},
				src: '<%= phantomcss.x_small.src %>'
			},
			x_large: {
				options: {
					screenshots: 'tests/visual/x-large/',
					results: 'results/visual/x-large/',
					viewportSize: [1920, 1080]
				},
				src: '<%= phantomcss.x_small.src %>'
			}
		},

		eslint: {
			app: {
				src: [
					'<%= config.app %>/assets/scripts/*.js'
				]
			}
		},

		connect: {
			build: {
				options: {
					port: 9000,
					livereload: true,
					open: true,
					base: '<%= config.build %>'
				}
			},
			dist: {
				options: {
					port: 9001,
					base: '<%= config.dist %>'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['<%= config.app %>/assets/styles/{,*/}*.scss'],
				tasks: ['build:css', 'copy:css']
			},
			js: {
				files: ['<%= config.app %>/assets/scripts/{,*/}*.js'],
				tasks: ['eslint', 'copy:js']
			},
			html: {
				files: ['<%= config.app %>/{,*/}*.{html,markdown}'],
				tasks: ['copy:temp', 'jekyll:build']
			},
			icons: {
				files: ['<%= config.app %>/assets/images/icons/*.svg'],
				tasks: ['svgstore', 'jekyll:build']
			}
		}
	});

	grunt.registerTask('default', ['serve']);

	grunt.registerTask('build', 'Build the site, nothing fancy, no minification', function(target) {
		var tasks = {
			prep: ['clean', 'svgstore', 'copy:temp'],
			css: ['sass', 'autoprefixer'],
			minify: [
				'useminPrepare',
				'uglify',
				'cssmin',
				'usemin',
			],
			default: [
				'build:prep',
				'copy:images',
				'build:css',
				'jekyll:build'
			]
		};

		grunt.task.run(tasks[target] || tasks['default']);
	});

	grunt.registerTask('dist', [
		'build:prep',
		'imagemin',
		'build:css',
		'match_media',
		'build:minify',
		'jekyll:dist'
	]);

	grunt.registerTask('serve', 'Builds the site, starts a simple node server', function (target) {
		var tasks = {
			dist: [
				'dist',
				'connect:dist',
				'watch'
			],
			default: [
				'build',
				'connect:build',
				'watch'
			]
		};

		grunt.task.run(tasks[target] || tasks['default']);
	});

	grunt.registerTask('test', ['eslint']);
};