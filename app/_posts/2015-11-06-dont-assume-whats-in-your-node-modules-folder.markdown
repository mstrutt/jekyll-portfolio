---
layout: post
title: Don't assume what's in your node_modules folder
preview: NPM v3 has been out for a little while now, and with it has come a not insignificant change, the structure of the node_modules folder has been largely flattened. If you're just using other modules within your project, then this change shouldn't really impact you. If you're publishing an npm module with dependency on other modules, however, then this change means that the dependencies of your module are likely to be in the root level.
date: 2015-11-06 08:06:21
categories:
- npm
- npm3
- require
- node
- nodejs
---

# Don't assume what's in your node_modules folder

NPM v3 has been out for a little while now, and with it has come a not insignificant change, the structure of the `node_modules` folder has been largely flattened. If you're just using other modules within your project, then this change shouldn't really impact you. If you're publishing an npm module with dependency on other modules, however, then this change means that the dependencies of your module are likely to be in the root level `node_modules` folder (relatively `../`) instead of a `node_modules` folder within your module (relatively `./node_modules`).

## The good news

So long as you're using `require('some-module')` then npm will take care of looking in the right place for you, and everything will still work, hurray!

## The issue

The complication I've seen comes when specifying a filepath to use in some other situation (like specifying a config file from another module). I've seen things similar to in a few places

```
var configPath = './node_modules/some-module/path/to/config.json'
```

and here's the tricky part: this works fine when you're developing your module. When working in your project folder, all modules *will* be in the `node_modules` folder within it. The problem only rears its head after you're shipped it and it's installed inside the `node_modules` folder itself, that's when `./node_modules/some-module` is actually at `../node_modules/some-module` - a sibling of your module, not a child.

## `require` to the rescue

Thankfully `require` has some slightly lesser known applications that can help us get around this issue.

1. `require` can get a file within a module, not just the module's base file: `require('some-module/path-to/not-index.js')` will find `some-module` and then look for `path-to/not-index.js` within it.
2. `require` can resolve the location of a module instead of including it: `require.resolve('some-module')` will give you the path to the `some-module` folder as a string
3. You can combine **1** and **2**

Putting these together we can easily solve the problem from my previous example

```
var configPath = require.resolve('some-module/path/to/config.json');
```

and now never have to worry about where `some-module` actually is, so long as npm knows.
