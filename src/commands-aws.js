'use strict';

const AWS = require('aws-sdk');

global.replServer.defineCommand('aws.listDomains', {
  help: 'List all Elasticsearch domains on the account.',
  action: () => {
    global.aws.es.listDomainNames().promise().then(
      (data) => {
        console.log(data);
        global.replServer.displayPrompt();
      },
      (err) => {
        console.error(err);
        global.replServer.displayPrompt();
      }
    );
  },
});

global.replServer.defineCommand('aws.setRegion', {
  help: 'Set the AWS region.',
  action: () => {
    global.aws.es.listDomainNames().promise().then(
      (data) => {
        console.log(data);
        global.replServer.displayPrompt();
      },
      (err) => {
        console.error(err);
        global.replServer.displayPrompt();
      }
    );
  },
});

global.replServer.defineCommand('aws.getRegion', {
  help: 'Get the AWS region.',
  action: () => {
    console.log(AWS.config.region);
  },
});
