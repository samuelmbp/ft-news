# FT News

A web application that queries the [Financial Times Headline API](https://developer.ft.com/portal/docs-quick-start-guides-headline-licence) for articles. By default, it displays the most recent articles from [ft.com](https://www.ft.com/). On the other hand, the user can search and return articles relating to a given topic.
## Installation Locally
- Clone this repository to your machine
- Install node.js
- Move to the project directory
- Run ```npm install``` to install all the dependencies
- Install ```esbuild``` with ```npm install esbuild```
- Create a ```.env``` file in the root  directory ```ft-news```
  - Get an apiKey from [developer.ft.com](https://developer.ft.com/portal/docs-start-obtain-an-api-key)
  - In the ```.env``` file add ```FT_API_KEY='YOUR_API_KEY'```
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
----
## Building Process
- First I set up the project and installed all the dependencies required
- I built the first user story to display the news headlines
- I have used the API_KEY from FT website to retrieve the headlines
- I have implemented the second user story to be able to search for specific headlines
- I have decided to extract some code from the router and move into the helpers folder
- I have used the FT's [Origami](https://origami.ft.com/) Components for a similar look and feel as ft.com
- I have created the pagination feature with 10 results per page
  


## Technologies
- JavaScript
- NodeJS | Express
- EJS
- The FT's [Origami](https://origami.ft.com/) Components
- Esbuild
- ESLint


