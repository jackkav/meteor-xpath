Package.describe({
  name: 'jackkav:xpath',
  version: '0.0.10',
  summary: 'Wrapper for xpath and dom npm packages',
  git: 'https://github.com/jackkav/meteor-xpath',
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
  api.export('serializer');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jackkav:xpath');
  api.addFiles('xpath-tests.js','server');
});
