#!/usr/bin/env node

var fs = require('fs');

var dirName = process.argv[2];

var strHtml = '<!DOCTYPE>';
strHtml += '<link rel="stylesheet" type="text/css" href="css/style.css" />';
strHtml += '<script type="text/javascript" src="js/main.js"></script>';
strHtml += '<title>Hello</title>';
strHtml += '<h1>Hi</h1>';

var strCss = 'h1{color: red;}';

var strJs = 'var string = "Hello World";\n alert(string);';

fs.mkdirSync('./' + dirName); //mkdir

process.chdir('./' + dirName); //cd $1

fs.mkdirSync('css');

fs.mkdirSync('js');

fs.appendFileSync('./index.html',strHtml);
fs.appendFileSync('css/style.css',strCss);
fs.appendFileSync('js/main.js',strJs);

process.exit(0);


