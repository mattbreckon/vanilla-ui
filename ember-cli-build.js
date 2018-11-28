'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const environment = process.env.EMBER_ENV;
const blacklist = environment === 'production' ? ['ember-freestyle'] : [];

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, {
    blacklist,
    freestyle: {
      snippetSearchPaths: ['tests/dummy/app'],
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('vendor/highlight/styles/monokai-sublime.css');

  return app.toTree();
};
