# FT News

## How to run the app locally
- Clone this repository to your machine
- Install node.js
- Move to the project directory
- Run ```npm install``` to install all the dependencies
- Install ```esbuild``` with ```npm install esbuild```
- Create a ```.env``` file in the root directory.
  - Get an apiKey from ```https://developer.ft.com/portal/docs-start-obtain-an-api-key```
  - In the ```.env``` file add FT_API_KEY=YOUR_API_KEY
- Run the command ```npm run build``` to create the ```build``` folder
- Run the command ```npm run dev``` to run the server locally
- Open the browser and navigate to ```http://localhost:3000``` to use the application

----
## Specifications

### User Stories
```
As a user,
I want to be able to see a list of all the current news headlines from FT,
So that I can keep up to date with the current news 

Extra features added:
- Display via pagination with 10 results per page
- Have a similar look and feel as ft.com
```

```
As a user,
I want to be able to search for headlines containing specific words,
So that I can see related news articles (i.e. searching for "wimbledon" should return a list of wimbledon-related headlines)
```

