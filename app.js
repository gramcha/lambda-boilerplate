/**
 * Created by gramachandran on 09/01/18.
 */
const lambdaLocal = require('lambda-local');
const path = require('path');

var jsonPayload = {
  "httpMethod": "POST",
  "body": {
    "name": "gramcha",
    "marks": [100, 200],
  }
};


lambdaLocal.execute({
  event: jsonPayload,
  lambdaPath: path.join(__dirname, './index.js'),
  // profilePath: '~/.aws/credentials', //not required for testing locally
  profileName: 'default',
  timeoutMs: 2000,//lambda function timeout.
  callback: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
});

