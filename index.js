#!/usr/bin/env node

var path = require('path')
  , pkg = require('./package.json')
  , version = pkg.version
  , PeerServer = require('./lib').PeerServer
  , options = {
    debug: true,
    timeout: 5000,
    ip_limit: 5000,
    concurrent_limit: 5000,
    key: 'peerjs',
    port: 9000,
    path: '/',
    allow_discovery: false
  }

var server = PeerServer(options, function(server) {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    'Started PeerServer on %s, port: %s, path: %s (v. %s)',
    host, port, options.path || '/', version
  );
});
