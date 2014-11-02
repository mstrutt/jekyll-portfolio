jekyll-portfolio
================

[ ![Codeship Status for mstrutt/jekyll-portfolio](https://www.codeship.io/projects/58c32b10-a70a-0131-231e-3e5c9af62d7d/status)](https://www.codeship.io/projects/18952)

My portfolio / blog ([mstrutt.co.uk](http://mstrutt.co.uk)), built using the Jekyll static site generator.

##Prerequisites

This project relies on the global installation of the ruby gem `jekyll` and the npm package `grunt-cli`

## Posts

For cleanliness (and for better or worse) I decided to place my blogposts in [a separate repository](https://github.com/mstrutt/blog).

### Suggested install

```
npm install
npm install -g grunt-cli
gem install jekyll
```

## Some grunt commands

### Main environment tasks

- `grunt` - Creates the development environment and sets up a watch task
- `grunt development` - Builds the CSS and HTML, copys other aspects into the build folder
- `grunt staging` - Builds, then adds in asset minification + desktop stylesheet
- `grunt deploy` - Copys staging to live, no deletions

### Some useful subtasks

- `grunt minify` - Minify all assets, including images
- `grunt buildcss` - Compile Sass into CSS and automatically adds the right vendor prefixes
