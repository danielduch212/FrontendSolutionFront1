# FrontendSolutionFront

This is part two of my Solution for frontend developers. So there is diagram which presents workflow of Ci/CD process performed by GithubActions (link):

![Pusty diagram](https://github.com/user-attachments/assets/3c325551-0989-4edf-b70e-a74ebffcffca)

So after frontend developer commits changes - first job - build is performed:
  - Api Gateway is created
  - In environment.ts file of angular project - the variable named apiUrl is changed - it is used to connect with API - thats why there was need to create api gateway in this job -
  - Then the app is build and artifacts are stored in Github Environment.

Then there is second job - deploy:
  - Artifacts from api project are downloaded from S3 - they are needed to create Lambda ASP .NET core
  - Frontend artifacts stored in Github Environment (build) and backend artifacts downloaded from S3 are now uploaded to S3 to hashed folder based on commit
  - Then, the CloudFront Distribution - used for hosting site - is created - now we have the frontend
  - Later, we create Lambda ASP .NET core with our backend artifacts (ZIP) - so we have api, but because Lambda is serverless, we use Api Gateway
  - In this step we configure previously created Api Gateway - which is used to get requests from frontend - Api Gateway is integrated with Lambda - so all request to Api Gateway are performed in Lambda
  - In the end - frontend developer gets url and on this dynamically created site - he is able to test his changes.


 In my opinion this project is very useful - because it can help frontend developers to work better. As you see, when there are problems with environments for example - developer can test changes on working environment created in AWS cloud.
