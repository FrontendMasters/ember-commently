/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    function MyFilter(inputNode) {
        Filter.call(this, inputNode);
    }

    MyFilter.prototype = Object.create(Filter.prototype);

    MyFilter.prototype.processString = function(existingString) {
        var prepend = `/**
            * vendor.js
            *
            * (c) 2016 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
            * generated at: ${(new Date()).toISOString()}
            */`;
        return prepend + existingString;
    };

    MyFilter.prototype.extensions = ['js'];
    MyFilter.prototype.targetExtension = 'js';

    return new MyFilter(app.toTree());
};