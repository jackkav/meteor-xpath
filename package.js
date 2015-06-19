Package.describe({
  name: 'jackkav:xpath',
  version: '0.0.9',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for xpath and dom npm packages',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jackkav/meteor-xpath',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'xpath': '0.0.9',
  'xmldom': '0.1.19',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('xpath.js','server');
  api.export('xpath');
  api.export('dom');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jackkav:xpath');
  api.addFiles('xpath-tests.js','server');
});
