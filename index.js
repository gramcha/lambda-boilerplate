/**
 * Created by gramachandran on 09/01/18.
 */
'use strict';

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  let result = {};
  const done = function (err, res) {
    console.log('err - ', err);
    result['status'] = err ? err.message : "success";
    result['response'] = res;
    callback(null, {
      statusCode: err ? '400' : '200',
      body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


  switch (event.httpMethod) {
    case 'GET':
      done(null, "success - GET");
      break;
    case 'POST':
      if (typeof(event.body) === "string") {
        event.body = JSON.parse(event.body);
      }
      //Do something event.body - json payload
      console.log(event.body);

      //incase of error
      // done(new Error("error message"));

      //onsuccess
      done(null, event.body);
      break;
    default:
      done(new Error(`Unsupported method "${event.httpMethod}"`));
  }
};
