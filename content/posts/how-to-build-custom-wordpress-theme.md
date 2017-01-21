---
title: How to build a custom Wordpress theme?
heading: How to build a custom Wordpress theme?
date: 2017-01-15
layout: Post
---

Let's take a closer look on how you can build your own custom theme. If you're totally new to Wordpress theme development, you might have a rocky road ahead. I also assume that you know how to setup your own local development environment, and will skip straight to the good part. 

## Starter theme - Sage
Using a starter theme saves some precious time as we get the basic skeleton ready. We're going to use Sage starter theme by Roots. It comes with a lot of nice features for development, although it lacks a few things that you might want it to have, like woocommerce support, for example. It does not pass the WP theme check out of the box either; so, if you wish to add your theme to wordpress.org, prepare to do some hacking. 

** I'm working on a Mac, I hope you are as too. **

### Install Sage
Open the terminal and navigate to the themes folder. If you're new to terminal, don't worry. There aren't too many commands we need to use. To navigate in terminal, use `cd path-where-to-go` the desired directory, `cd .. to return and just cd to go back home. 

#### Install latest version of Sage
To install the latest version, clone the repo from <a href="https://github.com/roots/sage" target="blank" rel="nofollow">Github</a> with `git clone https://github.com/roots/sage.git` to your theme directory. If you wish to rename the folder, use `git clone https://github.com/roots/sage.git my-awesome-theme-folder-name`. 

#### Install specific version (recommended)
To install a specific version of Sage, you can use Composer, which is a tool for depency management in PHP. If you don't have composer installed, <a href="https://getcomposer.org" target="_blank" rel="nofollow">click here</a>. I'm currently using the version 8.4.1. To install the same version, write the command `create-project roots/sage your-theme-name 8.4.1` in your theme directory. 

### NPM Install
To install theme depencies, navigate to your new theme folder (`cd your-theme`) and run `npm install`. 

** If this command is not familiar to you, you most likely wont have Node & npm installed.** 

Install Node. First, we install Homebrew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. Then, install node using `node@0.12`. We install version v0.12.*, as that works well with our project. Once this is done, run the `npm install` as mentioned before. 

### Development
As assumed, you have your own development environment already running locally. To get started with Sage, open the file `your-theme-name/assets/manifest.json` and change the _devUrl_ to yours. If you don't have Gulp isntalled, install Gulp, run `npm install --global gulp-cli`. Also, it might be useful to check this out <a href="https://css-tricks.com/gulp-for-beginners/" target="_blank" rel="nofollow">Gulp for beginners</a>.

Start developing using `gulp watch`. Use `gulp --production` to compile the production version and `
gulp clean` or just `gulp´ to clean the production version.

_If you need more help in the actual development phase, feel free to message me @Juutti on Twitter. I might also write part 2 in the future._ 

