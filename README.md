### Introduction

This project sets up a **`WhatsApp feedback survey`** using **`AWS Lambda functions and Twilio`**. The process involves creating a Twilio account, setting up a WhatsApp Sandbox, deploying a Node.js Lambda function, and configuring the integration between Twilio and AWS Lambda.


### Tech Stack Used
- Twilio for setting up WhatsApp messaging.
- AWS Lambda for deploying the serverless function.
- Node.js for the backend logic.


### How to build and run locally (Quick and Simplified Approach)
- Node.js version 20.15.0+ is required. Install using nvm.
- Do npm install in the root directory. This will install all necessary dependencies.
- Install node_modules packages using the command npm run install-all.
- Run npm run deploy and it will handle the deployment to AWS Lambda.
 
### Setup Steps
**Twilio Setup**
- **Create a Twilio Account**

- Visit the Twilio website.
- Sign up for a free account or log in if you already have one.
- **Obtain Account SID and Auth Token**

- Log in to your Twilio Console Dashboard.
- Locate your Account SID and Auth Token under the "Project Info" section.
- Copy these credentials as you will need them for API configuration.
- **Set Up WhatsApp Sandbox**
- Navigate to Messaging Settings
- In the Twilio Console, click on the "Messaging" section in the left-hand side panel.
- Select "Try it Out" and then click "Send a WhatsApp Message".
- Configure WhatsApp Sandbox
- Follow the instructions to set up a WhatsApp Sandbox. You may need to verify your phone number as a sandbox user.
- Once set up, go to the "Sandbox Settings" page.
- Update Sandbox Settings:
- In the "Sandbox Settings", provide the URL where Twilio should redirect incoming messages. This URL should be your AWS Lambda function URL.

### AWS Lambda Function Setup
- **Create a Lambda Function**
- Log in to the AWS Management Console.
- Navigate to the AWS Lambda service.
- Click "Create Function" and select "Author from scratch".
- Choose Node.js as the runtime, name your function, and configure the necessary permissions.
- Click "Create Function".
- **Prepare and Deploy Your Code**
- Prepare Your Code
- Develop a Node.js application that interacts with Twilio’s API to send and receive WhatsApp messages. The application should handle both sending messages and processing incoming messages.
- Package Your Code.
- Zip your Node.js project, including the code and dependencies.
- Deploy to AWS Lambda.
- On the Lambda function's page, click "Upload" and select your zipped project file.
- Click "Deploy" to upload and deploy your code.
- **Configure Lambda Function URL**
- Create a Function URL
- In the Lambda function console, navigate to the "Function URL" section.
- Click "Create function URL", select the access type based on your needs, and copy the generated URL.
- Update Endpoints
- Append /send-survey to the Lambda function URL for sending feedback survey messages.
- Append /whatsapp to the Lambda function URL for handling incoming messages from WhatsApp.
### How to use the uploaded package
- **Update Twilio Sandbox Settings**
- Configure Incoming Message URL
- In the Twilio Console, go to the "Sandbox Settings" page.
- Set the incoming message URL to your Lambda function URL with the /whatsapp endpoint.
- Verify Setup
- Test sending messages to your WhatsApp sandbox number to ensure that the messages are correctly processed by your Lambda function.
### Dependencies
- **This project uses the following Node.js packages**
- **dotenv** (version ^16.4.5) - For managing environment variables.
- **nodemailer** (version ^6.9.14) - For sending emails.
- **querystring** (version ^0.2.1) - For parsing query strings.
- **twilio** (version ^5.2.2) - For interacting with Twilio's API.

### Installation
- **Clone the Repository**
- git clone 
- Navigate to the Project Directory cd <project-directory>
- Install the Dependencies **npm install**
### Usage
- **Set Up Environment Variables**
- Create a .env file in the root directory and add your Twilio credentials
- TWILIO_ACCOUNT_SID=your_account_sid
- TWILIO_AUTH_TOKEN=your_auth_token

- **Deploy to AWS Lambda**
- Follow the AWS Lambda deployment steps mentioned above.

### Test the Integration
- Send a WhatsApp message to your sandbox number to initiate the survey and verify the setup.

### Node.js Version
- The project is developed and tested using Node.js version 20.15.0.














