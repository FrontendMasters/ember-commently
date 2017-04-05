/* eslint-env node */

const Filter = require('broccoli-filter');

'use strict';

function MyFilter(inputNode) {
  Filter.call(this, inputNode);
}

MyFilter.prototype = Object.create(Filter.prototype);

MyFilter.prototype.processString = function(existingString) {
var prepend = `/**
* vendor.js
*
* (c) 2017 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
* generated at: ${new Date().toISOString()}
*/
`;
  return prepend + existingString;
};

MyFilter.prototype.extensions = ['js'];
MyFilter.prototype.targetExtension = 'js';


module.exports = {
  name: 'commenter',

  isDevelopingAddon: function() {
    return true;
  },

  postprocessTree: function(type, tree) {
    return new MyFilter(tree, {});
  },
  
  includedCommands: function() {
    return {
      fem: {
        name: 'slack',
        description: 'Sends a message to a slack channel',
        works: 'insideProject',
        anonymousOptions: [],
        availableOptions: [{
          name: 'channel',
          type: String,
          default: 'general'
        }],
        run: function(commandOptions, rawArgs) {
          this.ui.writeLine('------------💬  SENT TO SLACK 💬--------------');
          this.ui.writeLine('#' + commandOptions.channel + ': ' + rawArgs[0]);
        }
      }
    }
  }

};
