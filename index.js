'use strict';

const AWS = require('aws-sdk');
const repl = require('repl');

// Init the region.
AWS.config.update({ region: 'us-east-1' });

global.replServer = repl.start({ prompt: '> ', useColors: true, ignoreUndefined: true });
global.aws = {};
global.aws.es = new AWS.ES();

require('./src/commands-aws');
