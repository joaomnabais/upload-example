# Upload Example
This project is a demo of how to upload images to Amazon S3 (Amazon Simple Storage Service) or even locally.

## Backend
Mongo DB runnig is required for this app to works.

You need to install "node_modules" typing the next command at backend directory:
### `npm i`
When "node_modules" are installed, open the .env file and make your configuration.

If you want a Amazon S3 upload, change "STORAGE_TYPE" to "s3" and get your "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY" and "AWS_DEFAULT_REGION" on amazon website. https://aws.amazon.com/pt/s3/

If you want a local upload, dont change anything at .env file, all is set to work.

Now just run the app typing the next command:
### `npm start`

## Frontend

You need to install "node_modules" typing the next command at frontend directory:
### `npm i`

Once installed just run the app with the next command:
### `npm start`

## Preview

![alt text](https://github.com/joaomnabais/upload-example/blob/master/frontend/src/assets/upload-example.gif)
