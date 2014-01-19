module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ['build']
		},
		copy: {
			build: {
				expand: true,
				cwd: 'app',
				src: [
					'**',
					'!assets/scripts/**',
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
			html: 'app/_layouts/page.html',
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
				root: 'app',
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
			build: {
				options: {
					src : 'build',
					dest: 'staging'
				}
			}
		},
		match_media: {
			desktop: {
				files: {
					'build/assets/styles/desktop.css': ['build/assets/styles/site.min.css']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-match-media');

	grunt.registerTask('default', ['build']);

    grunt.registerTask('build', ['clean:build', 'useminPrepare', 'uglify', 'cssmin', 'match_media', /**/'copy:images'/*/'imagemin'/**/, 'copy:build', 'usemin', 'jekyll:build']);
};