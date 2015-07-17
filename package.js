Package.describe({
  name: 'ramen-dev:meteor-ramen',
  summary: "Ramen.is basic integration (uses 'widget' snippet)",
  version: "0.0.0",
  git: "https://github.com/ramen-dev/meteor-ramen.git",
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.3.1');

  api.use('session', 'client');
  api.use('accounts-base', ['client', 'server']);

  api.add_files('ramen_server.js', 'server');
  api.add_files('ramen_client.js', 'client');
  
  api.export('ramenSettings');
  api.export('RamenMeteor', 'server');
});
