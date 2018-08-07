# lambda-boilerplate
A lambda boilerplate project for the simple backend with a RESTful API endpoint using the Amazon API Gateway.
It is a lambda function and exposed to the outside world using the Amazon API Gateway. 


##### Build
This source code needs to be uploaded as a zip file in AWS Lambda Function. To build this zip file, execute below commands.

    npm install

    npm run zip

It will generate an index.zip file in the source directory. It has to be uploaded to AWS Lambda.

##### Execute Locally
You can run and test the actual functionality in the local machine itself without actual AWS Lambda.
    
    1. Modify the jsonPayload object with proper details for testing in app.js file.

Execute below command to run locally

    npm run start


#### Endpoint URL

    https://****.execute-api.eu-west-1.amazonaws.com/prod/lambdaboilerplate

##### GET
It can be used for checking the health of this function. It will return 'success' in case of operational condition.
    
##### POST
Assign label(s) to an asset in backlot.
     
**Sample Request**

    {
        "name": "gramcha",
        "marks": [100, 200],
    }
        
**Sample Response**
    
    {
            "name": "gramcha",
            "marks": [100, 200],
    }